function verificar() {

    var nombre = document.getElementById('nombreUsuario').value;
    var correo = document.getElementById('correoUsuario').value;
    var requisito = document.getElementById('requisitoUsuario').value;

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return false;
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo)) {
        alert("Por favor ingrese un correo electrónico válido.");
        return false;
    }

    if (requisito.length > 300) {
        alert("El requisito no puede tener más de 300 palabras.");
        return false;
    }

    alert("Formulario enviado exitosamente.");
    return true;
}