const API   = 'https://crudcrud.com/api/c35810be2b884febae9566a16e52f134'
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

            // Si la ID esta presente
            // Actualizo
            if(this.form._id){
                const persona = {...this.form}
                // Le voy a quitar la ID del obj persona
                delete persona._id
                axios.put(API + model + '/' + this.form._id, persona).then( res => {
                    console.log("success: ", res)
                    this.obtenerPersonas()
                }).catch( error => {
                    console.log("error: ", error)
                })

            } else {
                // Creo
                axios.post(API + model, this.form).then( res => {
                    console.log("success: ", res)
                    this.obtenerPersonas()
                }).catch( error => {
                    console.log("error: ", error)
                })
            }
        },
        obtenerPersonas: function (){
            this.initForm()
            axios.get(API + model).then(res => {
                this.personas = res.data
            }).catch( error => {
                console.log("error: ", error)
            })
        },
        seleccionarPersona: function (persona){
            this.form = {...persona}
        },
        eliminarPersona: function (id){
            if(confirm("Estas seguro que quieres eliminar?")){
                axios.delete(API + model + '/' + id).then(res => {
                    this.obtenerPersonas()
                }).catch( error => {
                    console.log("error: ", error)
                })
            }
        }
    },
    mounted: function (){
        // Obtengo la data de la API 
        // Cuando la pagina termina de cargar
        this.obtenerPersonas()
    }
})