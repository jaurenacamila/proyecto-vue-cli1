import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueForm from 'vue-form'

import Binding from "./components/Binding.vue";
import Estructura from "./components/Estructura.vue";
import Atributos from "./components/Atributos.vue";
import Contador2 from "./components/Contador2.vue";
import Http from "./components/Http.vue";
import Formulario from "./components/Formulario/index.vue";

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

var options = {
  validators: {
    'no-espacios': function(value){
      return value.indexOf(' ') < 0
    }
  }
}
Vue.use(VueForm, options)

const router = new VueRouter ({
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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
