
let saludo = ("Bienvenido a nuestra tienda online! ")

alert(saludo + " Pulse aceptar para continuar.")


let usuario = prompt ("ingresar nombre de usuario")


do {
    password1 = prompt ("ingresar una contraseña de usuario");
    password2 = prompt ("Repita su contraseña");


if (password1 !== password2){
    alert("sus contraseñas no coinciden, reintentelo nuevamente.")}
}

while (password1 !== password2);

alert(`felicitaciones ${usuario} has creado tu cuenta`)


alert("Por favor, para una mejor experiencia de compra te recomendamos que nos respondas las siguientes preguntas. ")

function registrarDatos() {
    let datos = {}; 

    datos.moda = prompt("Que tipo de ropa prefieres:");
    datos.accesorios = prompt("Eres de llevar accesorios?");
    datos.deporte = parseInt(prompt("Haces deporte?"));
    datos.email = prompt("Ingrese su dirección de correo electrónico:");
    datos.telefono = prompt("Ingrese su número de teléfono:");

    console.log(datos);
    return datos; 

}


let datos = registrarDatos();

alert("¡Datos personales registrados con éxito! ");
    

do {opcion= prompt("Para poder mostrarle los productos correctos indique si es : hombre, mujer, niño");


switch (opcion){ 
    case "hombre":
    alert("bienvenido al sector Hombre");
    break
    case "mujer":
    alert("bienvenida al sector Mujer");
    break
    case "niño":
    alert("bienvenido al sector niño");
    break
    default: 
    opcion = false
    alert("opcion no validada");
    }
}
while(opcion === false )



