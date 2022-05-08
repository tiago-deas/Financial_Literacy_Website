// Calculadora Simples

function calcNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
 }
 
 
 function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
 }
 

 function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (oper == "subtrair") {
          var valor = valor1 - valor2;
       } else {
          if (oper == "multiplicar") {
             var valor = valor1 * valor2;
          } else {
             var valor = valor1 / valor2;
          }
       }
    }
 
    return(valor);
 }
 
 
 function calcParse(oper) {
    var valor = document.calcform.visor.value;
    delete gvisor;
 
    if (typeof goper != 'undefined' && oper == 'resultado') {
       gvalor = calcOper(goper, gvalor, valor);
       document.calcform.visor.value = gvalor;
       delete oper;
       delete gvalor;
       return(0);
    }
 
    if (typeof gvalor != 'undefined') {
       gvalor = calcOper(goper, gvalor, valor);
       goper = oper;
       document.calcform.visor.value = gvalor;
    } else {
       gvalor = valor;
       goper = oper;
    }
 
 }

//  Calculadora Financeira

calculate = function(){

   var renda = document.getElementById('renda').value;
   
var desp1 = document.getElementById('agua').value;

var desp2 = document.getElementById('luz').value;

var desp3 = document.getElementById('aluguel').value;

var desp4 = document.getElementById('financiamento').value;

var desp5 = document.getElementById('internet').value;

var desp6 = document.getElementById('celular').value;

var desp7 = document.getElementById('alimentacao').value;

var desp8 = document.getElementById('transporte').value;

var desp9 = document.getElementById('cartao').value;

var desp10 = document.getElementById('lazer').value;

var desp11 = document.getElementById('saude').value;

var desp12 = document.getElementById('outros').value;
     

     var total = parseFloat(renda) - (parseFloat(desp1) + parseFloat(desp2) + parseFloat(desp3) + parseFloat(desp4) +
     parseFloat(desp5) + parseFloat(desp6) + parseFloat(desp7) + parseFloat(desp8) + parseFloat(desp9) + parseFloat(desp10) + parseFloat(desp11) + parseFloat(desp12));

   
     document.getElementById('total').value = total
}



