// Funcion para calcular en indice de masa corporal, use algunos metodos para que me redondee un numero o me lo eleve a x numero.
function CalculoIMC(sexo, altura, peso) {
    altura = Math.round(altura) / 100;
    peso = Math.round(peso);
    
    let indice = (peso / Math.pow(altura, 2));
    let resultado = " ";
    

    // Con este switch comparo el resultado para saber cual es la devolucion para su respectivo sexo.
    switch (sexo) {
        
            case "m":
                if (indice < 20){
                    resultado = "su peso es inferior al normal.";
                }
                else if (indice >= 20 && indice < 24){
                    resultado = "su peso es normal.";
                }
                else if (indice >= 24 && indice < 29){
                    resultado = "su peso es superior al normal.";
                }
                else {
                    resultado = "usted tiene obesidad";
                }
                break
                
            case "h":
                if (indice < 21){
                    resultado = "su peso es inferior al normal.";
                }
                else if (indice >= 21 && indice < 25){
                    resultado = "su peso es normal.";
                }
                else if (indice >= 25 && indice < 30){
                    resultado = "su peso es superior al normal.";
                }
                else{
                    resultado = "usted tiene obesidad";
                }		   
                break
                default:
                    resultado = "No se pudo calcular el IMC. No se ingreso 'h' (hombre) o 'm' (mujer).";
                }
                
                return "Su IMC es: " + indice.toFixed(2) + ", " + resultado;
    }


// Esta funcion concadena los datos y me los muestra en un alert
function ResultadoFinalIMC (sexo, altura, peso, indice){
    let mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
        alert (mensaje);
    }

// Estas variables son los datos del usuario
let sexo = prompt("Bienvenidx! Ingrese su sexo, 'h' si es hombre o 'm' si es mujer");
let altura = parseInt(prompt("Ingrese su altura en centimetros: "));
let peso = parseInt(prompt("Ingrese su peso en kilogramos: "));


// Llamo a la funcion para hacer el calculo
let resultado = CalculoIMC(sexo, altura, peso);
// Y llamo a esta otra para que me lo muestre en pantalla
ResultadoFinalIMC(sexo, altura, peso, resultado);
