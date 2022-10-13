function traerDatosCategoria(){
    $.ajax( {
        url: "http://localhost:8080/api/Reservation/all",
        type: "GET",
        dataType: "json",
        success: function(respuesta){
            pintarDatos(respuesta);
        },
        error: function(respuesta, xhr){
            alert("Error De Petición");
        }
    });
}

function pintarDatos(datos){
    let html=""
    html += "<tr>";
    Object.keys(datos[0]).forEach(elemento =>{
        html+="<th>"+elemento+"</th>";
    });
    html += "</tr>";

    $("#tabla").empty();
    $("#tabla").append(html);

}
