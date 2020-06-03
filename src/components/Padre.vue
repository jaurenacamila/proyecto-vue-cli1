<template>

  <section class="src-components-padre">
     <div class="jumbotron mt-3">
        <h2>Componente {{ 'Padre' | reverse | reverse | aMayuscula | wrap('*','-fin') }}</h2>
        <hr>
        <Hijo />
     </div>
  </section>

</template>

<script lang="js">

import Hijo from './Hijo.vue'

  export default  {
    name: 'src-components-padre',
    components : {
      Hijo
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-padre {
  }
  .jumbotron {
  background-color: rgb(90, 171, 247);
  color: rgb(119, 101, 101);
  }
  hr {
  background-color: #ddd;
  }
</style>
