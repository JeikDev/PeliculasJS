const input = document.getElementById('upload');
var peliculas;
var peliculaSeleccionada = new String();
var random;

function cargarArchivo(archivos){
    const archivo = archivos[0];

    let reader = new FileReader();

    reader.onload = (e) => {
        const archivo = e.target.result;

        peliculas = new Array(archivo.split(/\r\n|\n/));
        // Quitamos primera fila
        peliculas[0].splice(0,1);
        generarRandom(peliculas[0].length, 0);
    };

    reader.readAsText(archivo);
}

function generarRandom(max, min){
    random = parseInt(Math.random() * (max - min) + min);
    mostartPelicula(random);
}

function mostartPelicula(pos){
    peliculaSeleccionada = peliculas[0][pos];
    peliculaSeleccionada = peliculaSeleccionada.split(",");

    let nodo = document.createElement('div');
    let clases = 'p-3 mt-3 pelicula-resultado';
    nodo.setAttribute('class', clases);
    let titulo = document.createElement('h1');
    titulo.setAttribute('class', 'titulo-resultado');
    titulo.innerHTML = "La película seleccionada es:"
    nodo.appendChild(titulo);
    
    let pelicula = document.createElement('h3');
    pelicula.innerHTML = peliculaSeleccionada[0] + ' - ' + peliculaSeleccionada[1];
    pelicula.setAttribute('class', 'resultado');
    nodo.appendChild(pelicula);

    document.getElementById("content").appendChild(nodo);
}

input.addEventListener('change', function(){
    cargarArchivo(input.files)
});