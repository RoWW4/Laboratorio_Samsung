function valoracion()
{
    var valor;
    valor = document.getElementById("rango").value;
    alert("Has valorado con " + valor + " puntos");
}
function cuentaBanco() 
{
    var pais, iban, entidad, sucursal, dc, cuenta;
    pais = "ES";
    iban = document.getElementById("iban").value;
    entidad = document.getElementById("entidad").value;
    sucursal = document.getElementById("sucursal").value;
    dc = document.getElementById("dc").value;
    cuenta = document.getElementById("cuenta").value;

    alert("Le informamos que su cuenta bancaria es: "+ pais + iban +
     "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta);
}

function diaSemana()
{
    var fecha = document.getElementById("fecha_enc");
    var dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    alert("La fecha seleccionada en el elemento fecha es un " + 
    dia[fecha.valueAsDate.getDay()]);
}