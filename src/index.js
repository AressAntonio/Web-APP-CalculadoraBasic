//import { saludar } from './js/componentes.js';
import './css/styles.css';

//llamando objetos del html y agregandolos a una variable.
const botonNumber = document.getElementsByName('number');

const botonOperacion= document.getElementsByName('operation');

const botonIgual = document.getElementsByName('equal')[0];

const botonBorrar = document.getElementsByName('delete')[0];

///creando variables para funciones
let resultado = document.getElementById('result');
let operacionActual = '';
let operacionAnterior = '';
let operacion = undefined;

//funcion para precionar un numero y que aparesca en pantalla
botonNumber.forEach(function(button){
    button.addEventListener('click', function(){
        addNumero(button.innerText)
    })
});

//funcion para seleccionar un boton de operacion a realizar y que se reconozca en pantalla.
botonOperacion.forEach(function(button){
    button.addEventListener('click', function(){
        selecOperacion(button.innerText);
    })
});

//funcion para que el boton de igual muestre el resultado de la operacion en pantalla
botonIgual.addEventListener('click', function(){
    calcular();
    updateDisplay();
});

//funcion para que el boton C borre lo digitado en pantalla
botonBorrar.addEventListener('click', function(){
    clear();
    updateDisplay();
});

//funcion para recopilar datos de la operacion requerida por el usuario
function selecOperacion(key){
    if(operacionActual === '')return;
    if(operacionAnterior === ''){
        calcular();
    }

    operacion = key.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}


///funcion que realiza la operacion seleccionada
function calcular(){
    let calculo;
    const actual = parseFloat(operacionActual);
    const anterior = parseFloat(operacionAnterior);

    if(isNaN(anterior) || isNaN(actual))return;

    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "*":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        default:
            "Error 404";
            return;
    };

    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
};

//funcion para agregar mas de un numero en pantalla
function addNumero(num){
    operacionActual = operacionActual.toString() + num.toString();
    updateDisplay();
};

//funcion para borrar lo digitado en pantalla
function clear(){
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
};

//funcion para mostrar lo digitado en pantalla
function updateDisplay(){
    resultado.value = operacionActual;
};
