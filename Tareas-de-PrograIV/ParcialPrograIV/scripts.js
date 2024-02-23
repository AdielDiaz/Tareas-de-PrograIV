document.addEventListener("DOMContentLoaded", function() {

    var botonRelleno = document.getElementById("botonInformatico");
    var infoContainer = document.getElementById("InformacionExtra");

    botonRelleno.addEventListener("click", function() {
        var nuevoElemento = document.createElement("div");

        nuevoElemento.innerText = "HTML (Lenguaje de Marcado de Hipertexto) proporciona una estructura semántica para organizar contenidos en páginas web, permitiendo la inclusión de elementos como texto, imágenes y formularios de manera jerarquizada. Es fácil de aprender y sigue estándares abiertos, garantizando la compatibilidad con diversos navegadores y dispositivos. Por otro lado, CSS (Hojas de Estilo en Cascada) permite separar la presentación del contenido, facilitando la reutilización de estilos y el mantenimiento del código. Además, posibilita la creación de diseños responsivos y la incorporación de animaciones, contribuyendo a la mejora de la experiencia del usuario en diferentes dispositivos. En conjunto, HTML y CSS son fundamentales en el desarrollo web moderno, proporcionando la base para la creación de sitios efectivos y visualmente atractivos.";

        infoContainer.appendChild(nuevoElemento);
    });
});
