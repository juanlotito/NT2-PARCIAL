<template lang>

  <section class="src-components-navegacion">
    <nav class="navbar navbar-expand-md navbar-ligth bg-lingth" style="background-color: #42b883 " >
      <router-link to='/'>
      <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to='/multiplechoice'>
          <a class="nav-link" href="#">MultipleChoice</a>
          </router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to='/formulario'>
          <a class="nav-link" href="#">Formulario</a>
          </router-link>
        </li>
      </ul>

    </nav>



  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-navegacion',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navegacion {
    color:black;
  }
  .navbar-brand {
    color:black
  }
  .nav-link {
    color:black
  }
</style>
