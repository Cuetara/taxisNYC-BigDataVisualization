<template>
  <div class="section" id="codigo">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-100 md-xsmall-size-100 mx-auto text-center">
          <h2 class="title text-center">Código Python</h2>
          <svg height="10" width="150">
              <line x1="0" y1="0" x2="150" y2="0" style="stroke:rgb(76,174,81);stroke-width:4" />
            </svg>
            <h4>Gran parte de la limpieza, análisis y obtención de nuevos datos se ha llevado a cabo con Python. <br> Esta es una recopilación del código ejecutado.</h4>
             <br> 
              <div>
                <div class="buttom-python">
                  <md-button href="limpieza-de-datos.html" class="md-success md-lg" target="_blank" > Limpieza de datos </md-button>
                </div>
                <div class="buttom-python">
                  <md-button href="Poligonos-Aeropuerto-JFK-y-Empire-State.html" class="md-success md-lg" target="_blank" > Obtención de Barrios y Distritos</md-button>
                </div>
                <div class="buttom-python">
                  <md-button href="Matriz-para-diagrama-chord.html" class="md-success md-lg" target="_blank" > Matriz para el diagrama Chord </md-button>
                </div>
                <div class="buttom-python">
                  <md-button href="Matriz-para-diagrama-chord.html" class="md-success md-lg" target="_blank" > Polígonos en Puntos de Interés </md-button>
                </div>
                <div class="buttom-python">
                  <md-button href="Ruta-completa-de-un-unico-taxi.html" class="md-success md-lg" target="_blank" > Ruta completa de un único taxi </md-button>
                </div>
                <br> 
                <br> 
                <br> 
                <br> 
                <br> 
                <br> 
                <h4>Puedes descargar todo el código y datasets anteriores en Github </h4>
                <div class="buttom-python">
                  <md-button href="https://github.com/" class="md-rose md-lg" target="_blank" > Ir a Github </md-button>
                </div>
             <br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Codigo',
  data: () => {
    return {
      text: "Hola"
    }
  },
  methods: {
    changeText () {
      this.text = "Veces presionado"
    }
  }
}

</script>

<style lang="scss" scoped>
.buttom-python {
  margin: 4vh 2vw;
  display: inline;
}
svg {
  display: block;
  margin: auto;
  margin-bottom: 30px;
}
/deep/.md-button.md-lg .md-ripple {
  @media(max-width: 600px) {
    padding: 1.125rem 1.25rem !important;
  }
}
</style>