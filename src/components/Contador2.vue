<template>
  <section class="src-components-contador-2">
    <div class="jumbotron mt-3" :style="{'background-color': colorDeFondo}">
      <h2>Componente {{titulo}}</h2>
        <hr>
        <button :class="['btn', getEstilos(), 'm-2']" @click= "contar()">Contar {{mostrarContador}}</button>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-contador-2',
  /*   props: {
      valorInicial: String, 
      estilo: String,
      colorDeFondo: String,
      titulo: String
    }, */

     props: ['valorInicial', 'estilo' , 'colorDeFondo' , 'titulo'],


    //-------------------------------------------------
    //-------------------------------------------------
    //https://es.vuejs.org/v2/guide/instance.html
    //-------------------------------------------------
    //        CICLO DE VIDA DE LOS COMPONENTES DE VUE
    //-------------------------------------------------

    // Instanciación del componente (new)
    beforeCreate () {
      console.log('Contador 2 -> beforeCreate')
    },
    created () {  
      console.log('Contador 2 -> created')
    },

    // Montaje del componente en la vista
    beforeMount () {
      console.log('Contador 2 -> beforeMount')
    },
    mounted () {
      console.log('Contador 2 -> mounted')

      /*----------------------------------- */
      /* activo proceso de timer */
      /*-----------------------------------*/
      this. refInterval = setInterval(() => {
        this.timer++
        console.log('Contador 2 -> TIMER', this.timer)
      }, 1000);
    },

     // Actualización de la vista del componente
    beforeUpdate () {
      console.log('Contador 2 -> beforeUpdate')
    },
    updated () {
      console.log('Contador 2 -> updated')
    },

      // Destrucción del componente
    beforeDestroy () {
      console.log('Contador 2 -> beforeDestroy')
    },
    destroyed () {
      console.log('Contador 2 -> destroyed')

      /*----------------------------*/
      /* desactivo proceso de timer */
      /*--------------------------- */
      clearInterval(this.refInterval)
    },

    //-------------------------------------------------
    //-------------------------------------------------


    data () {
      return {
         contador: this.valorInicial,
         timer: 0,
         refInterval: ''
      }
    },
    methods: {

      contar(){
      this.contador++
      //console.log(`El ini del contador es btn-${this.estilo}`)
    },
       getEstilos(){
        return 'btn-'+this.estilo
    }

    },
    computed: {
      mostrarContador(){
        return this.contador
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-contador-2 {

  }
  .jumbotron {
  background-color: rgb(129, 39, 57);
  color: white;
}

hr {
  background-color: white;
}
</style>
