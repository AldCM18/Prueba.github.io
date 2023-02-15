function limpiar(){
    document.getElementById('calculadora').reset();
   ///document.getElementById('numero1').reset();
   document.getElementById('numero2').contains =  '';
   document.getElementById('operacion').textContent =  '';
   //document.getElementById('igual').textContent =  '';
}

function suma(numero1,numero2){
    var numero1 = parseFloat (document.getElementById('numero1').value);
    var numero2 = parseFloat (document.getElementById('numero2').value);

    var resultado = numero1 + numero2;
    document.getElementById('resultado').value =  resultado;
    document.getElementById('operacion').textContent =  '+';
}


function resta(numero1,numero2){
    var numero1 = parseFloat (document.getElementById('numero1').value);
    var numero2 = parseFloat (document.getElementById('numero2').value);

    var resultado = numero1 - numero2;
    document.getElementById('resultado').value =  resultado;
    document.getElementById('operacion').textContent =  '-';
}

function multiplicar(numero1,numero2){
    var numero1 = parseFloat (document.getElementById('numero1').value);
    var numero2 = parseFloat (document.getElementById('numero2').value);

    var resultado = numero1 * numero2;
    document.getElementById('resultado').value =  resultado;
    document.getElementById('operacion').textContent =  '*';
}

function dividir(numero1,numero2){
    var numero1 = parseFloat (document.getElementById('numero1').value);
    var numero2 = parseFloat (document.getElementById('numero2').value);
    
    var resultado = numero1 / numero2;
    document.getElementById('resultado').value =  resultado;
    document.getElementById('operacion').textContent =  '/';
    

    
}