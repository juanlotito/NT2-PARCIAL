<template>
  <div id="app">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Navegacion></Navegacion>
    <div class="container-fluid">
      
      <router-view></router-view>
    <br><br>
    <h1>Parcial NT2</h1>
    <br>
    <h2>Juan Ignacio Lotito - 21D ALMAGRO</h2>
    

    <img alt="Vue logo" src="./assets/logo.png">
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Formulario from './components/Formulario.vue'
//import MultipleChoice from './components/MultipleChoice.vue'
import Navegacion from './components/Navegacion.vue'
export default {
  name: 'App',
  components: {
     //HelloWorld
    //Formulario,
   // MultipleChoice
   Navegacion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  background-color: #B1B7BE ;
}
</style>
