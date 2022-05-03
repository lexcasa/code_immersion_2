console.log("hola mundo!")

try {
    let nombre = "Alex"
    document.querySelector('a').innerText = nombre
} catch (e){
    console.log(e)
}

const DASHBOARD_VIEW = './dashboard.html'

// t=2
// let email = document.querySelector('#email').value
// let psw   = document.querySelector('#password').value

// t=i
const obtenerDatosForm = function (){
    // t=i + 1
    let email = document.querySelector('#email').value
    let psw   = document.querySelector('#password').value

    let validUser = validarUsuario(email, psw)

    if(validUser){
        window.location.href = DASHBOARD_VIEW
    } else {
        alert("Error usuario y/o clave incorrecta")
    }
    
    console.log(email, psw) // voy a verificar el contenido de las variables en t=2
}

// Logica
const validarUsuario = function (email, clave){
    const EMAIL = 'alex@gmail.com'
    const CLAVE = '123456'

    if(email === EMAIL && clave === CLAVE){
        return true
    }

    return false
}