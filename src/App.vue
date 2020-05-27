<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">

      <h1>Componente Principal (App)</h1>
      <hr>

      <Navbar />

      <Binding />

      <Estructura />

      <Atributos />

      <Contador init="123" boton="danger" />
      <Contador init="456" boton="warning" />
      <Contador init="789" boton="success" />
      <hr>

      <buttom class="btn btn-danger my-3" @click="mostrar=!mostrar">{{mostrar? 'Ocultar':'Mostrar'}}</buttom>
      <div v-if="mostrar">
        <Contador2 valor-inicial="321" estilo="primary" color-de-fondo="darkred" titulo="CONTADOR 2" />
      </div>


      <!--   <Navbar />
      <div class="row">
        <div class="col-6">
          <Binding />
        </div>
         <div class="col-6">
          <Estructura />
        </div>
      </div>
      <Atributos />
      <Contador /> -->

    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Binding from "./components/Binding.vue";
import Estructura from "./components/Estructura.vue";
import Atributos from "./components/Atributos.vue";
import Contador from "./components/Contador/index.vue";
import Contador2 from "./components/Contador2.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Binding,
    Estructura,
    Atributos,
    Contador,
    Contador2
  },
  data() {
    return{
      mostrar: true
    }
  }
};
</script>

<style>
#app {
}

h1{
  color:blue
}

</style>
