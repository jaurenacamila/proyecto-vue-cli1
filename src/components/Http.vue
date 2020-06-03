<template>

  <section class="src-components-http">

     <div class="jumbotron mt-3">
        <h2>Componente Http</h2>
        <hr>

        <button class="btn btn-success mx-3" @click="getUsuarios()">GET</button>
        <button class="btn btn-info mx-3" @click="postUsuario()">POST</button>

        <div class="media alert alert-info mt-3" v-for="(usuario, index) in usuarios" :key="index">
          <img :src="usuario.foto" width="330" :style="{'border-radius': '20px'}" :alt="usuario.nombre">
          <div class="media body ml-3">
            <ul>
            <h5><u>Usuario {{index + 1}} - ID: {{ usuario.id }} - creado: {{ usuario.createAt }}</u></h5>
            <br>
              <p>Nombre: <b>{{ usuario.nombre }}</b></p>
              <p>Descripcion: <i>{{  usuario.descripcion }}</i></p>
              <p>Comentarios: {{  usuario.comentarios }}</p>
              <p>Coordenadas: <i><b>{{  usuario.coordenadas }}</b></i></p>
              <p>Dirección: <i><u>{{  usuario.direccion }}</u></i></p>

            <button class="btn btn-warning m-3" @click="putUsuario(usuario.id)">PUT</button>
            <button class="btn btn-danger m-3" @click="deleteUsuario(usuario.id)">DELETE</button>

             </ul>

          </div> 
        </div>

        <hr>
        
     </div>

  </section>

</template>

<script lang="js">

  
  import { urlUsuarios } from '../urls'

  export default  {
    name: 'src-components-http',
    props: [],

    mounted () {
  
    },

    data () {
      return {
        usuarios : []
      }
    },

    methods: {
      /* --------------*/
      /* API REST GET */
      /* ------------ */
      getUsuarios(){
        /* get se puede poner o no en this.axios.get() */
          this.axios.get(urlUsuarios)
          .then(res =>{
          console.log(res.data)
          this.usuarios = res.data
      })
      .catch(error =>{
        console.log('Error HTTP', error)
      })
      },

       /* --------------*/
      /* API REST POST */
      /* ------------ */
    postUsuario(){
      let usuario = {
        nombre: "Pamela",
        foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png",
        descripcion: "Alumno Vue.js",
        coordenadas: "123456",
        comentarios: "Hello!",
        direccion: "CABA 456"
      }
      this.axios.post(urlUsuarios, usuario, {
          'content-type' : 'application/json'
      })
      .then( res => {
        let usuario = res.data
          console.log(usuario)
          //this.getUsuarios()
          this.usuarios.push(usuario)
      })
      .catch(error =>{
        console.log('Error POST HTTP', error)
      })
    },

      /* --------------*/
      /* API REST PUT */
      /* ------------ */

  putUsuario(id){
      let usuario = {
        nombre: "Maria",
        foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png",
        descripcion: "Alumno Vue.js",
        coordenadas: "123456",
        comentarios: "Hola como estas?",
        direccion: "CABA 123"
      }
      this.axios.put(urlUsuarios+id, usuario, {
          'content-type' : 'application/json'
      })
      .then( res => {
        let usuario = res.data
          console.log(usuario)
          this.getUsuarios()
          let offset = this.usuarios.findIndex(usuario => usuario.id == id)
          this.usuarios[offset] = usuario
         // this.usuarios.splice(offset, 1, usuario)
          
      })
      .catch(error =>{
        console.log('Error PUT HTTP', error)
      })
    },

       /* --------------*/
      /* API REST DELETE */
      /* ------------ */
  deleteUsuario(id){
         this.axios.delete(urlUsuarios+id)
          .then(res =>{
          console.log(res.data)
           //this.getUsuarios()
          let offset = this.usuarios.findIndex(usuario => usuario.id == id)
         // this.usuarios[offset] = usuario
         this.usuarios.splice(offset, 1)
      })
      .catch(error =>{
        console.log('Error DELETE', error)
      })
      },
  
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
