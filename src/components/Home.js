import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="ContainerPrincipal">
            <h1 className="tituloPrincipal">La biblioteca de Silvia</h1>
            <p className="parrafoInicio">Leer es algo que disfruto mucho, por ello, es importante para mi llevar un registro de los autores que he leido y sus respectivos libros.</p>

            <div className="containerImagenes">
                <img src="https://res.cloudinary.com/silviajcn/image/upload/v1638903169/Im%C3%A1genes%20para%20proyectos/Libros/la-biblioteca_cyrpcv.jpg" alt="..." />
            </div>
        </div>
    )
}

export default Home
