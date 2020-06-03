<template>

  <section class="src-components-hijo">
      <div class="jumbotron mt-3">
        <h2>Componente Hijo</h2>
        <hr>
        <input type="text" v-model="valor"> 
        <p>{{ valor }} x3 = {{ valor | por3 }}</p>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-hijo',
    props: [],
    filters : {
        por3: function(value){
          return value * 3
        }
    },
    mounted () {

    },
    data () {
      return {
        valor: 5
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-hijo {

  }
  .jumbotron {
  background-color: blue;
  color: rgb(119, 101, 101);
  }
  hr {
  background-color: #ddd;
  }
</style>
