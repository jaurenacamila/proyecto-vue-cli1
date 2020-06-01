<template>
  <section class="src-components-binding">
    <div class="jumbotron mt-3">

        <h2>Componente Binding</h2>
        <hr />

        <h4><u>Interpolacion / v-text / v-html</u></h4>
        <br />
        <p>{{ mensaje }}</p>
        <p v-text="mensaje"></p>
        <p v-html="mensaje"></p>
        <hr />
        <p>{{ mensajeHTML }}</p>
        <p v-text="mensajeHTML"></p>
        <p v-html="mensajeHTML"></p>
        <hr />

        <!--------------------------------------------->
        <!--------------------------------------------->
        <h4><u>Property binding / v-bind</u></h4>
        <br />
        <input type="text" value="123" />
        <br />
        <input type="text" value="valor" />
        <br />
        <input type="text" v-bind:value="123" />
        {{ valor }}
        <br />
        <input type="text" :value="123" />
        {{ valor }}
        <br />
        <hr />

        <!--------------------------------------------->
        <!--------------------------------------------->
        <h4><u>Event Binding / v-on</u></h4>
        <button class="btn btn-success m-3" v-on:click="contador++">Contar {{contador}}</button>
        <button class="btn btn-success m-3" @click="contador2++">Contar {{contador2}}</button>
        <button class="btn btn-success m-3" @click="incrementar()">Contar {{getContador()}}</button>
        <br />
        <hr />

        <!--------------------------------------------->
        <!--------------------------------------------->
        <h4><u>Doble Data Binding / v-model</u></h4>
        <br>
        <h5>Manual</h5>
        <input type="text" :value="valor2" @input="actualizar($event)" />
        {{valor2}}
        <br>
        <br>
        <h5>Automático</h5>
        <input type="text" v-model="valor3" /> {{valor3}}<br>
        <br>
        <hr>
        <br>

        <!--------------------------------------------->
        <!--------------------------------------------->
        <h4><u>Componentes contador</u></h4>
          <br>

          <Contador init="123" boton="danger" />
          <Contador init="456" boton="warning" />
          <Contador init="789" boton="success" />

    </div>
  </section>
</template>

<script lang="js">

  import Contador from "./Contador/index.vue";

  export default  {
    name: 'src-components-binding',

    components:{
      Contador
    },

    props: [],

    mounted () {
    },

    data () {
      return {

      mensaje: 'Soy un mensaje',
      mensajeHTML: '<i>Soy un mensaje</i>',
      valor:123,
      valor2:456,
      valor3:789,
      contador:0,
      contador2:123,
      contador3:456,

      }
    },
    methods: {
       incrementar(){
            this.contador3++
        },
        getContador(){
            return this.contador3
        },
        actualizar(e){
            let dato = e.target.value
            console.log(dato)
            this.valor2 = dato
        },

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-binding {
}

.jumbotron {
  background-color: purple;
  color: white;
}

hr {
  background-color: white;
}
</style>
