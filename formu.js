

function validacion() {

    let name = document.getElementById("name");
    let nombre = name.value.trim();

    let phone = document.getElementById("phone");
    let telefono = phone.value.trim();

    let email = document.getElementById("email");
    let correo = email.value.trim();

    let message = document.getElementById("message");
    let comentario = message.value.trim();

    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let confirmar = true;

    if (nombre == "") {
        document.getElementById('errorname').style.display = 'inline';
        name.focus();
        confirmar = false;
    } else {
        document.getElementById('errorname').style.display = 'none';
    }

    if (telefono == "") {
        document.getElementById('errorphone').style.display = 'inline';
        phone.focus();
        confirmar = false;
    } else {
        document.getElementById('errorphone').style.display = 'none';
    }

    if (!patron.test(correo)) {
        document.getElementById('erroremail').style.display = 'inline';
        email.focus();
        confirmar = false;
    } else {
        document.getElementById('erroremail').style.display = 'none';
    }

    if (comentario == "") {
        document.getElementById('errormessage').style.display = 'inline';
        message.focus();
        confirmar = false;
    } else {
        document.getElementById('errormessage').style.display = 'none';
    }

    name.value = " ";
    phone.value = " ";
    email.value = " ";
    message.value = " ";

    if (confirmar) {
        const datosIngresados = document.getElementById("datosIngresados");
        datosIngresados.style.display = "block";

        const nombreIngresado = document.createElement("p");
        nombreIngresado.innerHTML = `Nombre: ${nombre}`;
        document.getElementById("nombre-ingresado").appendChild(nombreIngresado);

        const telefonoIngresado = document.createElement("p");
        telefonoIngresado.innerHTML = `Teléfono: ${telefono}`;
        document.getElementById("telefono-ingresado").appendChild(telefonoIngresado);

        const emailIngresado = document.createElement("p");
        emailIngresado.innerHTML = `Correo: ${correo}`;
        document.getElementById("email-ingresado").appendChild(emailIngresado);

        const comentarioIngresado = document.createElement("p");
        comentarioIngresado.innerHTML = `Mensaje: ${comentario}`;
        document.getElementById("comentario-ingresado").appendChild(comentarioIngresado);
    }
    confirmar = false;
}


