let peso = 80;
let altura = 1.75;
let resultadoImc = 0;
let caracteristica = "";
let mensaje = "";

//calculo IMC = peso / (altura**2)

resultadoImc = peso / (altura**2);


// imc < 18.5 : bajo peso
// imc 18.5 y 25 : peso normal
// imc 25 y 30 : sobrepeso
// imc > 30 : obeso


if(resultadoImc < 18.5){
    caracteristica="BAJO PESO";
}else if (resultadoImc < 25) {
     caracteristica="NORMAL";
}else if (resultadoImc < 30) {
     caracteristica="SOBREPESO";
}else{
     caracteristica = "OBESIDAD";
}

console.log("su caracteristica es: "+caracteristica + " su resultado IMC:"+resultadoImc);