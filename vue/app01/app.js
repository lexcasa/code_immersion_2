const DASHBOARD_VIEW = './dashboard.html'

const app = new Vue({
    el: '#app',
    data: {
        // Elementos HTML en un Objeto de datos de JS
        elements: {
            buttons: {
                logIn: "Login",
                signUp: "Sign Up",
                loginSupport: "Having trouble login in?"
            }
        },
        form: {
            email: null,
            password: null
        }
    },
    methods: {
        // Como obtengo los datos del form
        // Cuando doy clic en el boton
        obtenerDatosForm: function (){
            console.log("formulario ::", this.form)

            let validUser = validarUsuario(this.form.email, this.form.password)

            if(validUser){
                window.location.href = DASHBOARD_VIEW
            } else {
                alert("Error usuario y/o clave incorrecta")
            }
        }
    }
})

// LOGICA
const validarUsuario = function (email, clave){
    const EMAIL = 'alex@gmail.com'
    const CLAVE = '123456'

    if(email === EMAIL && clave === CLAVE){
        return true
    }

    return false
}