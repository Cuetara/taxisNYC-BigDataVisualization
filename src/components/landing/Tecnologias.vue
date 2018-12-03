<template>
  <div class="section" id="tecnologias">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
          <h2 class="title text-center">Tecnologías</h2>
          <svg height="10" width="150">
              <line x1="0" y1="0" x2="150" y2="0" style="stroke:rgb(76,174,81);stroke-width:4" />
            </svg>
          <div class="md-layout">
              <md-card>
                <carousel
                  :per-page="1"
                  loop
                  :speed="700"
                  autoplay
                  :autoplay-timeout="5000"
                  :mouse-drag="false"
                  navigationEnabled
                  navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                  navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>">
                  <slide>
                    <div class="carousel-caption">
                      <h5 class="text-tecnology">
                        Análisis de Datos
                      </h5>
                    </div>
                    <img :src="carousel1" alt="carousel1">
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h5 class="text-tecnology">
                        Programación Web
                      </h5>
                    </div>
                    <img :src="carousel2" alt="carousel2">
                  </slide>
                  <slide>
                    <div class="carousel-caption">
                      <h5 class="text-tecnology">
                        Visualización
                      </h5>
                    </div>
                    <img :src="carousel3" alt="carousel3">
                  </slide>
                  <slide>
                  <div class="carousel-caption">
                      <h5 class="text-tecnology">
                        Edición de Vídeo e Imagen
                      </h5>
                    </div>
                    <img :src="carousel4" alt="carousel4">
                  </slide>
                </carousel>
              </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/analisis.jpg"),
      carousel2: require("@/assets/img/web.jpg"),
      carousel3: require("@/assets/img/graficacion.jpg"),
      carousel4: require("@/assets/img/edicion.jpg")
    };
  }
};
</script>


<style>
.text-tecnology {
  color: black;
  font-size: 1.25rem;
  margin-bottom: 12.5em;
}
svg {
  display: block;
  margin: auto;
  margin-bottom: 30px;
}
</style>
