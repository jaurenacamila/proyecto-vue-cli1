<template>

  <section class="src-components-http">

     <div class="jumbotron mt-3">
        <h2>Componente Http</h2>
        <hr>

        <button class="btn btn-success mx-3" @click="getAxios()">GET</button>
        <button class="btn btn-info mx-3" @click="postAxios()">POST</button>
        <hr>
        
     </div>

  </section>

</template>

<script lang="js">

  import axios from 'axios'

  export default  {
    name: 'src-components-http',
    props: [],

    mounted () {
  
    },

    data () {
      return {
        url : 'https://5ed4790dfffad10016056e4e.mockapi.io/post/'
      }
    },

    methods: {
      /* API REST GET */
      getAxios(){
          axios.get(this.url)
          .then(res =>{
          console.log(res.data)
      })
      },

      /* API REST POST */
      postAxios(){
        let post = {
          nombre: 'Juan',
          apellido: 'Perez',
          edad:32,
          email: 'j@p.com'
        }
        axios.post(this.url, post,{
          'content-type' : 'application/json'
        })
        .then(res =>{
          console.log(res.data)
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http {

  }
.jumbotron {
  background-color: blueviolet;
  color: white;
}
hr {
  background-color: white;
}
</style>
