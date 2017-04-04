function enviar(){
  var areaDeTexto=document.getElementById("areadetexto");
  console.log(areaDeTexto);
  var seccionDos=document.getElementById("seccionDos");
  var textoAmostrar=areaDeTexto.value;
  var parrafo=document.createElement("p");
  parrafo.innerText=textoAmostrar;
  seccionDos.appendChild(parrafo);
  var inputNombre=document.getElementById("input");
  var nombre=inputNombre.value;
  var parrafoDos=document.createElement("p");
  parrafoDos.innerText=" Por " + nombre;
  seccionDos.appendChild(parrafoDos);

}

  var h3=document.getElementById("contador");
  contador.addEventListener("click",contadorSuma);

  function contadorSuma(){
    var contador=0;
    contador++;
    
  }
