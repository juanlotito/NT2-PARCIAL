import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 

import Formulario from './components/Formulario.vue'
import MultipleChoice from './components/MultipleChoice.vue'

  export const router= new VueRouter ({
      mode: 'history',
      routes: [
        {path: '/formulario', component : Formulario},
        {path: '/multiplechoice', component : MultipleChoice},
      ]
  })
