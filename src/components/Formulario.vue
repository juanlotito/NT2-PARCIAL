<template>

  <section class="src-componentes-ingreso">
    <div class="jumbotron">
      <h2>Ingreso</h2>
      <hr>
<vue-form :state="formstate" @submit.prevent="enviar()">
          <label for="nombre">Nombre</label>
          <input type="text" 
          id="nombre" 
          v-model="formData.nombre" 
          required
          class="form-control"
          minlength="3"
          maxlength="15"
          />
    

        <br>

          <label for="descripcion">Descripcion</label>
          <input type="text" 
          id="descripcion" 
          v-model="formData.descripcion" 
          required
          class="form-control"/>
    

        <br>


          <label for="gasto">Gasto</label>
          <input type="number" 
          id="gasto" 
          v-model.number="formData.gasto" 
          required
          class="form-control"/>
    


        <br>
        
        <button class="btn btn-success my-3" type="submit">Enviar</button>

  </vue-form>
      <br>
      <hr>

      <!-- Tabla para representar los datos ingresados -->
      <h2>Detalle de Gastos</h2>
      <br>
      
      <div class="presupuesto">
        <p>Presupuesto</p>
        <input type="number" 
          id="gasto" 
          v-model.number="formData.presupuesto" 
          required
          class="form-control"/>
        <br>

      </div>

      <div v-if="gastos.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Gasto</th>
            <th>Fecha</th>
          </tr>
          <tr v-for="(gasto,index) in gastos" :key="index" :style="{color: supera()}">
            <td>{{ gasto.nombre }}</td>
            <td>{{ gasto.descripcion }}</td>
            <td>{{ '$'+gasto.gasto }}</td>
            <td>{{ gasto.fecha }}</td>
          </tr>
          <br><br><br>         
          <tr :style="{color: analizarGastos((calcularGastoTotal()))}">Gasto total: {{'$'+calcularGastoTotal()}}</tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay gastos ingresados</h3>

    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-ingreso',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getInitialData(),
        gastos : [],
        gastoTotal : null
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre : null,
          descripcion: null,
          gasto: null,
          fecha: null,
        }
      },
      enviar() {
        let gasto = {...this.formData}
        gasto.fecha = new Date().toLocaleString()

        console.log(gasto)
        this.gastos.push(gasto)
        this.gastoTotal = this.gastoTotal+gasto.gasto
        this.formData = this.getInitialData()
        this.formstate._reset()


      },
      analizarGastos(suma) {
        let color = 'green';
        if (suma>1000) {color='violet'}
        if (suma>5000) {color='orange'}
        return color      
      },

      calcularGastoTotal() {
        let suma = parseInt(0);
        for (let i=0; i<this.gastos.length; i++) {
          suma= parseInt(suma)+parseInt(this.gastos[i].gasto)
        }
        return suma
      },
      supera(presupuesto) {
        if (this.calcularGastoTotal()>presupuesto) {
          return true
        } else {
          return false
        }
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .src-componentes-ingreso {
    color:black;
  }

  .jumbotron {
    background-color: #B1B7BE;
    color: black;
  }

  .total {
    text-align: center;
  }

</style>
