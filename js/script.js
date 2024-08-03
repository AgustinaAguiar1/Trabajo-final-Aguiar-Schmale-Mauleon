let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();


    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let comentario = document.getElementById("comentario");


    let informacion = [];

    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value;
    informacion[4] = comentario.value;

    let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "contact.txt");

});