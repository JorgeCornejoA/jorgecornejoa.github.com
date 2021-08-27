
// Obtener los elementos de la clase .close

let cerrar = document.querySelectorAll(".close")


// Recorrerlos

cerrar.forEach(function(close){

    //Agregar un evento click a cada uno de ellos

    close.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content')
        
        //Quitarle las clases de animación que ya tiene
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar clases paraa animar su salida fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/boletines";
        }, 600);

        return false
    });
});

