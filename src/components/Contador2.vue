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

    mounted () {

    },
    data () {
      return {
         contador: this.valorInicial

      }
    },
    methods: {

      contar(){
      this.contador++
      console.log(`El ini del contador es btn-${this.estilo}`)
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
