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
    }
})