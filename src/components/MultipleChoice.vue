<template lang>

  <section class="src-components-multiple-choice">
    <div class="jumbotron">
      <div class="container">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="preguntas in preguntas" :key="preguntas.respuestas">
              <td>{{preguntas.numero}}</td>
              <td>{{preguntas.respuestas}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return { preguntas :[
        {numero: 1, respuestas:["B,D"]},
        {numero: 2, respuestas:["C"]},
        {numero: 3, respuestas:["B,D,E"]}
      ]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-multiple-choice {
    color:black;
    text-align: center;
  }
  .table {
    align-content: center;
  }
  .jumbotron {
    background-color: #B1B7BE ;
  }
</style>
