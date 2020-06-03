<template>

    <div id="app" class="container">

        <div class="jumbotron mt-3">

            <h1>Componente Principal (App)</h1>
            <hr>

            <Padre />
            <Navbar />
            <router-view></router-view>
            
        </div>

    </div>

</template>

<script>

import Navbar from "./components/Navbar.vue";
import Padre from "./components/Padre.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Padre
  },
  data() {
    return{
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
