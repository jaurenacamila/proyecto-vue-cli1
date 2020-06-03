import Vue from 'vue'
import VueRouter from 'vue-router'

import Binding from "./components/Binding.vue";
import Estructura from "./components/Estructura.vue";
import Atributos from "./components/Atributos.vue";
import Contador2 from "./components/Contador2.vue";
import Http from "./components/Http.vue";
import Formulario from "./components/Formulario/index.vue";

Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/Binding'},
      {path: '/binding', component: Binding},
      {path: '/estructura', component: Estructura},
      {path: '/atributos', component: Atributos},
      {path: '/contador2/:valorInicial/:estilo/:colorDeFondo/:titulo', component: Contador2, props:true},
      {path: '/formulario', component: Formulario},
      {path: '/http', component: Http}
    ]
  })