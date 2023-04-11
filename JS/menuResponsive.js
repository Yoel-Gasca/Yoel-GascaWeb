const botonMenu = document.querySelector(".button_menu");
const header = document.querySelector(".header");
const containerNav = document.querySelector(".container-nav");

let posActual = 0;
//Eventos

// Funcion para mostrar y ocultar el menu de navegacion
botonMenu.addEventListener("click", function(){
    containerNav.classList.toggle("active_button_menu");
    if(status_button){
        body.setAttribute("style", "overflow: hidden;");
        header.setAttribute("syle", "backdrop-filter:none");
        status_button = false;
    }else{
        body.removeAttribute("style", "overflow: hidden;");
        header.setAttribute("style", "backdrop-filter:blur(10px)");
        status_button = true;
    }
});

// Esta condicion desactiva y activa la barra de navegacion al subir o bajar el scroll
window.addEventListener("scroll", function(){
    if(this.window.scrollY > posActual){
        header.classList.remove("active_header");
        header.classList.add("desactive_header");
    }else{
        header.classList.remove("desactive_header");
        header.classList.add("active_header");
    }
    if(this.window.scrollY === 0){
        header.classList.add("ocultar_shadow");
    }else{
        header.classList.remove("ocultar_shadow")
    }
    posActual = this.window.scrollY;
});