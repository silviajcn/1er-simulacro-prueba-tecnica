import React, {useState} from 'react';
import axios from 'axios';
import { url } from '../helpers/url';
import { fileUpload } from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [autor, setAutores] = useState({
        imagen: '',
        nombre: '',
        pais: '',
        libros: '',
        favorito: ''
    })

    const { imagen, nombre, pais, libros, favorito } = autor
    
    const handleChange = ({ target }) => {
        setAutores({
            ...autor,
            [target.name] : target.value
        })
        console.log(autor);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleFile = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(response => {
                autor.imagen = response
            }).catch(error => {
                console.log(error);
            })
    }

    const postData = () => {
        axios.post(url, autor)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    
    return (
        <div>
            <form id="formulario" onSubmit={handleSubmit}>
                <h2>Registrar un nuevo autor</h2>
                <hr />
                <div>
                    <label>Foto del autor</label>
                    <input id="botonImagen" type="file" name="imagen" value={imagen} onChange={handleFile}/>
                    </div>
                
                    <div>
                    <label>Nombre del autor</label>
                    <input id="inputNombre" name="nombre" value={nombre} onChange={handleChange}/>
                    </div>
                
                    <div>
                    <label>Nacionalidad del autor</label>
                    <input id="inputNacionalidad" name="pais" value={pais} onChange={handleChange}/>
                    </div>
                
                    <div>
                    <label>Libros publicados</label>
                    <input id="inputLibros" type="number" name="libros" value={libros} onChange={handleChange}/>
                    </div>
                
                    <div>
                    <label>Tu libro favorito</label>
                    <input id="inputFavorito" name="favorito" value={favorito} onChange={handleChange}/>
                    </div>
                
                    <div>
                    <button id="btnAgregar" onClick={postData}>Agregar nuevo Autor</button>
                    </div>
            </form>
        </div>
    )
}
