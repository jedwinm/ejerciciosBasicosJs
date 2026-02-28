document.getElementById("calcularPrecioApp").addEventListener("click", calcularApp);

function calcularApp() {
/* nombre
tipoApp
numeroInternas
nombreCliente
mensaje */
    
    let nombre = document.getElementById("nombre").value;
    let tipoApp = document.getElementById("tipoApp").value;
    let numeroInternas = document.getElementById("numeroInternas").value;

    let valorTipoApp = 0;
    let costoInternas = 0;
    let totalProyecto = 0;


    if(tipoApp == "Futbol"){
        valorTipoApp = 1000000;
    }else if(tipoApp == "Uber"){
        valorTipoApp = 1500000;
    }else if(tipoApp == "Reservas"){
        valorTipoApp = 2200000;
    }else if(tipoApp == "Citas"){
        valorTipoApp = 3100000;
    }else{
        alert("seleccione un servicio papito");
    }

    if (numeroInternas< 5) {
        costoInternas = 500000;
    } else if (numeroInternas < 7) {
        costoInternas = 750000;
    } else if (numeroInternas < 9 ) {
        costoInternas = 1000000;
    } else{
        costoInternas = 1250000;
    }

    totalProyecto = valorTipoApp + (costoInternas * numeroInternas);

   // document.getElementById("calculadora").style.display = "none";

    document.getElementById("nombreCliente").textContent = "Señor(a), "+nombre;

    document.getElementById("mensaje").textContent = "el valor de su proyecto es: $"+totalProyecto;


}