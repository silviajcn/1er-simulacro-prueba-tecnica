# 📚 La Biblioteca de Silvia

La Biblioteca de Silvia es una idea que desarrollé durante un simulacro de prueba técnica en el bootcamp de Academia Geek.

Esta idea es el primer esbozo de un proyecto que quiero desarrollar: una pagina web que me permita cargar las lecturas que hago, asi como toda la información acerca del libro (autor del libro, genero literario, numero de páginas, fecha de la lectura, portada del libro, etc).

## 📌 Requisitos del simulacro:

* Elegir un tema (deportes, vehículos, ropa, comidas, etc).
* Elaborar una endpoint en Heroku
* Realizar una aplicación en react que permita:
   - Consumir la endpoint
   - Realizar registro del producto – POST
   - Listado y eliminación – GET y DELETE
* Implementar enrutamiento dinámico y hooks
* Despliegue en GitHub Pages o Vercel
* Estilos deben estar relacionados con el tema escogido

- Tiempo que tuve para el desarrollo de la prueba: 3.5 horas.

## Puede visitar La Biblioteca de Silvia aquí: https://1er-simulacro-prueba-tecnica.vercel.app/
    
# 💎 Proyecto

Para la creación del proyecto se utilizaron las siguientes herramientas de desarrollo:

* ```react```
* ```react-router-dom```
* ```axios```
* ```bootstrap```
* ```react-bootstrap```
* ```react-icons```
* ```styled-components```

## 🔥 Descarga del proyecto e Instalación

* Clonar el repositorio
* Abrir el proyecto en Visual Studio Code (o editor de confianza)
* Abrir la terminal del editor
* Correr el comando ```npm install``` para instalar correctamente las dependencias del proyecto
* Para levantar el servidor local se debe correr el comando ```npm start```

* Para la base de datos del proyecto se utilizó Heroku.

* En el proyecto se debe cambiar la configuracion dentro de la constante fileUpload con datos personales de su cuenta en Cloudinary. Esta constante se encuentra en la siguiente direccion: src > helpers > fileUpload.js > fileUpload (leer nota 1).

Nota 1: para cambiar estos datos es necesario contar con una cuenta de developer en Cloudinary, obtener la url de la api de cloudinary (a esta url se le debe agregar al final lo siguiente: /upload), ir a la seccion settings, luego a la seccion Upload, y en el apartado de Upload presets, agregar un nuevo Udloap preset, en este paso es necesario darle el nombre que se desee, cambiar el Signing Mode a Unsigned, darle un nombre a la carpeta donde se subiran las imagenes y guardar dicha configuracion. Hacer los cambios respectivos dentro del proyecto con estos datos.

## 🔍 Vista 

![silvislibrary_hbjezs](https://user-images.githubusercontent.com/88461234/153735366-7b6531e6-6132-4f86-a062-e5ff44d1481e.png)

## 🌟 Autor

* **Silvia C. Navarro**  - [@silviajcn](https://github.com/silviajcn)
