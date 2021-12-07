import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../helpers/url'
import '../styles/Lista.css';

export const List = () => {

    const [autores, setAutores] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setAutores(response.data);
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
        <div className="ContainerTabla">
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Foto del autor</th>
                    <th>Nombre del autor</th>
                    <th>Nacionalidad</th>
                    <th>Libros publicados</th>
                    <th>Tu libro favorito</th>
                    </tr>
                </thead>
                
                <tbody>
                   {
                        autores.map(autor => (
                            <tr key={autor.id}>
                                <td><img src={autor.imagen} alt="..." /></td>
                                <td>{autor.nombre}</td>
                                <td>{autor.pais}</td>
                                <td>{autor.libros}</td>
                                <td>{autor.favorito}</td>
                                <td><button onClick={()=> dataDelete(autor.id)}>Eliminar</button></td>
                            </tr>
                       ))    
                   }
                </tbody>
            </table>
        </div>
    )
}


