<template>
  <div>
    <div id="app">
      <Navbar />
      <Binding />
      <Estructura />
      <Atributos />
      <Contador />
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
</style>
