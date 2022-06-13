const API   = 'https://crudcrud.com/api/016f14e748384d809c4e128669f275f4'
const model = '/personas'
const app = new Vue({
    el: '#app',
    data: {
        personas: [],
        form: {
            _id: undefined,
            nombre: null,
            documento: null
        } 
    },
    methods: {
        initForm: function (){
            this.form = {
                _id: undefined,
                nombre: null,
                documento: null
            } 
        },
        guardar: function (){
            console.log(this.form)
            // Envio la info al server
            // API + model: https://crudcrud.com/api/fa9f30a41dc04788a4fa95fec1d16eca/personas
            axios.post(API + model, this.form).then( res => {
                console.log("success: ", res)
                this.obtenerPersonas()
            }).catch( error => {
                console.log("error: ", error)
            })
        },
        obtenerPersonas: function (){
            this.initForm()
            axios.get(API + model).then(res => {
                this.personas = res.data
            }).catch( error => {
                console.log("error: ", error)
            })
        }
    },
    mounted: function (){
        // Obtengo la data de la API 
        // Cuando la pagina termina de cargar
        this.obtenerPersonas()
    }
})