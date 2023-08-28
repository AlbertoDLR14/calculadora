var displayResultado = document.querySelector("#operacion");
var displayActual = document.querySelector("#display");
var botonesNumeros = document.querySelectorAll(".boton");
var botonesOperador = document.querySelectorAll(".operador");

const display = new Display(displayResultado, displayActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener("click", () => {
        display.agregarNumero(boton.value);
    });
});

botonesOperador.forEach(boton =>{
    boton.addEventListener("click", () => {
        display.computar(boton.value);
    })
})

































// function calcula(){
//     for(bot of boton){
        
//         bot.addEventListener("click", function(e){
            
            

//         })
//     }
// }

// calcula();
