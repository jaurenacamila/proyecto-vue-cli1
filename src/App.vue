<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">

      <h1>Componente Principal (App)</h1>
      <hr>

      <Navbar />

      <Binding />
      <Estructura />
      <Atributos />
      <Contador />

   <!--    <Navbar />
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

export default {
  name: "App",
  components: {
    Navbar,
    Binding,
    Estructura,
    Atributos,
    Contador
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
