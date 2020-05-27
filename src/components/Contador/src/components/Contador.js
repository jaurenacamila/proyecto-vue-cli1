export default {
  name: 'src-components-contador',
  components: {},
  props: ['init', 'boton'],
  data () {
    return {
      contador: this.init
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

    contar(){
      this.contador++
      console.log(`El ini del contador es btn-${this.boton}`)
    },
    getEstilos(){
        return 'btn-'+this.boton
    }

  }
}


