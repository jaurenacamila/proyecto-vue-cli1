
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
      enviando: false
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
      console.log(this.formData)
      this.formData = this.getInitialData()
      this.formState._reset()
    }

  }
}


