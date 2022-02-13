import React, {useState} from 'react';
import axios from 'axios';
import { url } from '../helpers/url';
import { fileUpload } from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [libros, setLibros] = useState({
        imagen: '',
        nombre: '',
        genero: '',
        autor: '',
        nacionalidad: '',
        // fecha: '',
    })

    const {
        imagen,
        nombre,
        genero,
        autor,
        nacionalidad,
        // fecha
    } = libros
    
    const handleChange = ({ target }) => {
        setLibros({
            ...libros,
            [target.name] : target.value
        })
        //console.log(libros);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                libros.imagen = response
            }).catch(error => {
                console.log(error);
            })
    }

    const postData = () => {
        axios.post(url, libros)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    
    return (
        <div>
            <form id="formulario" onSubmit={handleSubmit}>
                <h2>Registrar libros leídos</h2>
                <div className="ContainerInputs">
                
                    <div className="inputs">
                        <div className="containerLabel">
                            <label>Nombre del libro</label>
                        </div>
                    <input id="inputLibro" name="nombre" value={nombre} onChange={handleChange}/>
                    </div>
                
                    <div className="inputs">
                        <div className="containerLabel">
                            <label>Genero literario</label>
                        </div>
                    <input id="inputGenero" name="genero" value={genero} onChange={handleChange}/>
                    </div>
                
                    <div className="inputs">
                        <div className="containerLabel">
                            <label>Nombre del autor</label>
                        </div>
                    <input id="inputAutor" type="text" name="autor" value={autor} onChange={handleChange}/>
                    </div>
                
                    <div className="inputs">
                        <div className="containerLabel">
                            <label>Nacionalidad del autor</label>
                        </div>
                    <input id="inputNacionalidad" name="nacionalidad" value={nacionalidad} onChange={handleChange}/>
                    </div>

                    {/* <div className="inputs">
                        <div className="containerLabel">
                            <label>Fecha de culminación de lectura</label>
                        </div>
                    <input id="botonFecha" type="date" name="fecha" value={fecha}/>
                    </div> */}
                
                    <div className="inputs">
                        <div className="containerLabel">
                            <label>Portada del libro</label>
                        </div>
                    <input id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleFile}/>
                    </div>
                
                    <div className="boton">
                    <button id="btnAgregar" onClick={postData}>Agregar nuevo Autor</button>
                    </div>

                </div>
            </form>
        </div>
    )
}
