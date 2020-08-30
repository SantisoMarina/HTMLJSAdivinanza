/* siempre decir intentos restantes

1er vez -> nada
2da vez -> pista 1
3er vez -> pista 2
4ta vez -> mostrar respuesta correcta 

respuesta correcta -> felicitaciones */



const respuestaCorrecta = "flan";
let cantidadIntentos = 0;
const limiteIntentos = 4;
let pista ="";
const botonCierreAlerta = "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button>";

function validarRespuesta() {
    
    let intentos ="Intentos <span class=\"badge badge-pill badge-dark\">####</span><span class=\"sr-only\">unread messages</span>"
    let respuestaForm = document.getElementById('respuesta').value.toLowerCase();
    if(respuestaForm==""){
        return;
    }
    
    let intentosRestantes=0;

    cantidadIntentos++;
    intentosRestantes= limiteIntentos-cantidadIntentos;

    intentos = intentos.replace('####',intentosRestantes.toString())
    document.getElementById('intentos').innerHTML = intentos;
    if (cantidadIntentos < limiteIntentos) {

        if(respuestaForm != respuestaCorrecta){
            if (cantidadIntentos==2) {
                pista +="<li>Tiene cuatro letras</li>";
            }
            if (cantidadIntentos==3) {
                pista +="<li>Es amarillo</li>";
            }
        }
       else{
        pista="RESPUESTA CORRECTA!";
        document.getElementById('divPista').classList.remove('alert-dark');
        document.getElementById('divPista').classList.add('alert-success');
        document.getElementById('divFlan').style.display = 'block';
        document.getElementById('btnAceptar').style.display = 'none';
        document.getElementById('intentos').style.display = 'none';
       }


    }
    else {
        pista += "<li><strong>Flan!!</strong></li>"
        document.getElementById('divFlan').style.display = 'block';
        document.getElementById('btnAceptar').style.display = 'none';
        document.getElementById('intentos').style.display = 'none';
    }

    console.log(pista + botonCierreAlerta);
    if(cantidadIntentos>0 && pista!=""){
        document.getElementById('divPista').innerHTML = pista + botonCierreAlerta;
        document.getElementById('divPista').style.display = 'block';
    }
    else {
        document.getElementById('divPista').style.display = 'none';
    }


}

