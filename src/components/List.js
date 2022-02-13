import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../helpers/url'
import '../styles/Lista.css';

export const List = () => {

    const [libros, setLibros] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setLibros(response.data);
            }).catch(error => {
                console.log(error);
        })
    }

    const dataDelete = (id) => {
        axios.delete(url + id)
            .then(response => {
                getData() 
            }).catch(error => {
                console.log(error)
        })
    }

    return (
        <div className="container">
            <h1 className="tituloPrincipal">Libros leídos</h1>

            <div className="containerLibros">
                {
                    libros.map(autor => (
                        <div className="cards" key={autor.id}>
                            <div className='containerImg'>
                                <img className="fotoAutor" src={autor.imagen} alt="portada" />
                            </div>

                            <div>
                                <div>
                                    <h3>Título: <strong>{autor.nombre}</strong></h3>
                                </div>

                                <div>
                                    <p>Genero literario: <strong>{autor.genero}</strong></p>
                                    <p>Autor: <strong>{autor.autor} </strong>({autor.nacionalidad}).</p>
                                    <p>Fecha de lectura: <strong>{autor.fecha} </strong></p>
                                </div>
                            </div>

                            <div>
                                <button className="botonEliminar" onClick={()=> dataDelete(autor.id)}>Eliminar libro</button>
                            </div>
                                
                        </div>
                    ))    
                }
            </div>
        </div>
    )
}


