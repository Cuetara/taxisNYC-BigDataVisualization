<template>
  <div class="section" id="estadisticas">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
          <h2 class="title text-center">Datos Interesantes</h2>
            <svg height="10" width="150">
              <line x1="0" y1="0" x2="150" y2="0" style="stroke:rgb(76,174,81);stroke-width:4" />
            </svg>
        </div>
      </div>

      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center taxi" :style="taxyStyle">
        </div>
      </div>

      <div class="features text-center">
        <div class="md-layout align-center">
          <div class="md-layout-item md-medium-size-25 md-small-size-50">
            <div class="info">
              <div class="icon tabla">
                <table>
                    <tr>
                      <th><numero-creciente :number="352"/></th>
                      <!-- <th class="count">352/th> -->
                      <h2>mil</h2>
                    </tr>
                  </table>
              </div>
              <h4 class="h4-size">trayectos al día</h4>
              </div>
          </div>
          <div class="md-layout-item md-medium-size-25 md-small-size-50">
            <div class="info">
              <div class="icon tabla">
                <table>
                    <tr>
                      <th><numero-creciente :number="5.31"/></th>
                      <h2>&nbsp M$</h2>
                    </tr>
                  </table>
              </div>
              <h4 class="h4-size">de volumen de negocio diario</h4>
              </div>
          </div>
          <div class="md-layout-item md-medium-size-25 md-small-size-50">
              <div class="info">
                <div class="icon tabla">
                  <table>
                    <tr>
                      <th><numero-creciente :number="83.1"/></th>
                      <h2>&nbsp %</h2>
                    </tr>
                  </table>
                </div>
                <h4 class="h4-size">del volumen de pickups se concentra en Manhattan</h4>
              </div>
          </div>
          <div class="md-layout-item md-medium-size-25 md-small-size-50">
              <div class="info">
                <div class="icon tabla">
                  <table>
                    <tr>
                      <th> <numero-creciente :number="15.1"/></th>
                      <h2>&nbsp $</h2>
                    </tr>
                  </table>
                </div>
                <h4 class="h4-size">de coste medio por trayecto</h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NumeroCreciente from '@/components/generic/NumeroCreciente.vue'
export default {
  name: 'Estadisticas',
  components: {
    NumeroCreciente
  },
  computed: {
    taxyStyle () {
      return {
        backgroundImage: `url(${require('@/assets/img/taxi-sin-fondo.png')})`
      }
    }
  }
}

// <script>
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
// </script>
</script>




<style lang="scss" scoped>
.align-center {
  display: flex;
  justify-content: center;
}
.md-layout-item {
  min-width: 250px!important;
}
.taxi {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 200px;
}
.tabla {
  margin: -25px 0;
  display: flex;
  justify-content: center;
}
.section {
  padding: 50px 0 0 0;
}
.h4-size{
  font-size: 20px;
}

svg {
  display: block;
  margin: auto;
  margin-bottom: 30px;
}
</style>