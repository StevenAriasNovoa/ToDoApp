
// // <---------------------cookiessssssssssssssssssssss----------------------------->


// // ----------------------------optener cookies----------------
// var listaTareasGlobal = [];
// // var miGalleta = document.cookies;

// console.log("lista con todas las cookies", document.cookie)
// function AgregarTareaCookie(tarea) {
//     listaTareasGlobal.push(tarea);

//     let listaTareasGlobalCadenaTexto = JSON.stringify(listaGlobal);
//     document.cookie = "listaTareas=" + listaTareasGlobalCadenaTexto;
// }

// function eleminarTareaCookie(tarea) {
//     let indiceTarea = listaTareasGlobal.findIndex(algunaTarea => algunaTarea.toUpperCase() === tarea.toUpperCase());


//     // findIdex retorna -1 si no la encuentra y un numero con el ndice s lo encuentra
//     if (indiceTarea >= 0) {

//         listaTareasGlobal.splice(indiceTarea, 1); //los elimina

//         var listaTareasGlobalCadenaTexto = JSON.stringify(listaGlobal);
//         document.cookie = "listaTareas=" + listaTareasGlobalCadenaTexto
//     }
// }
// function optenerCookie() {
//     let galleta = document.cookie;
//     let galletadividida = galleta.split("=");
//     alert(galletadividida(1));

// }
// AgregarTareaCookie("tarea1");
// optenerCookie();



var miNuevoInput = document.createElement("input");
miNuevoInput.setAttribute("type", "checkbox");
var contenedorTareasDiv = document.getElementById("contenedorTareasDiv");
var inputA = document.getElementById("ingresar-tarea");
var button = document.getElementById("botonAgregar");
var span = document.getElementById("circulo");
var ul = document.getElementById("ulContainer");
var numerosCirculo = document.getElementById("numeritos");
var circulo = 0;

// <------------------------------variables----------------------------------->
function eleminar(event) {
    var padreLi = event.target.parentElement;
    console.log(padreLi);
    ul.removeChild(padreLi);

    var listachecks = document.querySelectorAll(".inputcheck");
    var contador = 0;
    for (let index = 0; index < listachecks.length; index++) {
        var checks = listachecks[index]
        if (checks.checked == true) {
            contador += 1
        }
    }
    alert("Seguro quieres borrar esta tarea?");
    ocultar();
    circulo = contador;
    numerosCirculo.textContent = contador
}
// <------------------------------unir funciones contador------------------------------->
function checkbox(event) {
    var nuevaEtiquetaInput = event.target;
    if (nuevaEtiquetaInput.checked == true) {
        circulo += 1; console.log(circulo);
    } else {
        circulo -= 1; console.log(circulo);
    } numerosCirculo.textContent = circulo;
}
// <----------------------------------------contador------------------------------------>

var inputA = document.getElementById("ingresar-tarea");
inputA.textContent = button;
// <-----------------------------tarea repetida-------------------------->

function tareaRepetida() {
    var listaTareas = document.querySelectorAll("label");
    for (let index = 0; index < listaTareas.length; index++) {
        if (listaTareas[index].innerHTML.toLowerCase() == inputA.value.toLowerCase()) {
            inputA.value; "";
            inputA.focus();
            return true;
        }
    }
    return false;
}


// nuevaEtiquetaText.classList.add("textoSinTareas");

function ocultar() {
    var nuevaEtiquetaText = document.querySelector("#textoSinTareas");
    // console.log("Tareas=", textoSinTareas.length);
    var listaTareasA = document.querySelectorAll("#textoSinTareas");
    console.log("listaTareasA", listaTareasA);
    if (listaTareasA.length == 0) {
        nuevaEtiquetaText.classList.remove("oculto");
    } else {
        nuevaEtiquetaText.classList.add("oculto");
    }
}
// < ------------------------- texto oculto------------------------>

function miAlerta(evento) {
    evento.preventDefault();
    if (inputA.value == 0) {
        alert("POR FAVOR AGREGA UNA TAREA");
    } else if (tareaRepetida() == true) {
        alert("tarea repetida escribe otra");
    } else {
        console.log("si hay una tarea no habra alerta");

        let nuevaEtiquetaContenedor = document.createElement("div");
        let nuevaEtiquetaInput = document.createElement("input");
        nuevaEtiquetaInput.setAttribute("type", "checkbox");
        let nuevaEtiquetaI = document.createElement("i");
        nuevaEtiquetaI.classList.add("btn", "btn-danger", "bi", "bi-trash3");
        let nuevaEtiquetaText = document.createElement("label");
        nuevaEtiquetaText.textContent = inputA.value;
        let nuevaLista = document.createElement("li");
        nuevaLista.classList.add("listaLi");
        // let nuevaEtiquetaBotonDelect = document.createElement("button");
        nuevaEtiquetaContenedor.classList.add("textoLista");
        nuevaEtiquetaInput.classList.add("inputcheck");

        nuevaLista.appendChild(nuevaEtiquetaInput);
        nuevaLista.appendChild(nuevaEtiquetaText);
        nuevaLista.appendChild(nuevaEtiquetaI);
        ul.appendChild(nuevaLista);

        contenedorTareasDiv.appendChild(nuevaEtiquetaContenedor);
        nuevaEtiquetaI.addEventListener("click", eleminar);
        nuevaEtiquetaInput.addEventListener("change", checkbox);

    }
    ocultar();
    inputA.value = "";
    inputA.focus();
}
button.addEventListener("click", miAlerta);

inputA.addEventListener("keypress",
    function keypress(KeyboardEvent) {
        if (KeyboardEvent.key === "Enter") {
            KeyboardEvent.preventDefault();
            miAlerta(KeyboardEvent);
        }
    });