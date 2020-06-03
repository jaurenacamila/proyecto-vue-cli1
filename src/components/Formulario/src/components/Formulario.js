
import { urlPosts } from '../../../../urls'

export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formState:{},
      formData: this.getInitialData(),
      edadMin:18,
      edadMax:120,
      enviando: false,
      nombreChrMin: 5,
      nombreChrMax: 15
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInitialData() {
      return{
        nombre: '',
        apellido: '',
        edad:'',
        email: ''
      }
    },
    enviar(){
      this.enviando = true
      console.log(this.formData)

      /* ------------------------- */ 
      /* ENVIO DE DATOS CON AXIOS */
      /* ----------------------- */
      this.axios.post(urlPosts, this.formData,{
        'contente-type' : 'application/json'
      })
      .then( res =>{
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset() 
        this.enviando = false
      })
      .catch(error =>{
        console.log('ERROR POST',error)
        this.enviando = false
      })

      setTimeout(() => {
        this.enviando = false
      },10000)
    }

  }
}


