<template>
  <parallax class="section page-header header-filter" :style="headerStyle">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
          <div class="nyc-container">
            <img :src="nyc" alt="nyc" class="nyc">
          </div>
          <h3 class="title">Análisis del Volumen de Negocio en los Taxis de NYC</h3>
          <h4 class="subtitle">Los datos analizados corresponden a la circulación de taxis en New York a lo largo de un día. Esta publicación representa el proyecto final del curso de Big Data Visualization, impartido por Telefónica.</h4>
          <br>
          <div class="button-center">
            <md-button href="https://www.youtube.com/embed/aDXY7pgYi5k" class="watch-video md-warning md-lg" target="_blank"><i class="fas fa-play"></i> Ver vídeo </md-button>
          </div>
            <div class="button-center">
              <md-button href="/#/mockups"  class="md-warning md-lg" @click="classicModal = true"><i class="material-icons">desktop_mac</i> Mockups </md-button>
            </div>
        </div>

        <div class="video-container">
          <iframe src="https://www.youtube.com/embed/aDXY7pgYi5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

      </div>
    </div>
  </parallax>
</template>

<script>

export default {
  name: 'LandingHeader',
  components: {
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${require('@/assets/img/fondo.jpg')})`
      }
    },
  },
  data() {
    return {
      nyc: require("@/assets/img/nyc.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  @media(min-width: 1200px) {
    max-width: 2000px!important;
  }
}
.nyc {
  max-width: 80%;
  display: block;
  margin: 50px auto 0 50px;

  @media(max-width: 600px) {
    margin: 50px 0 0 0;
    max-width: 100%;
  }
}

h3.title {
  margin: 30px 50px 20px 50px;
  @media(max-width: 600px) {
    text-align: center;
    max-width: 350px;
    display: block;
    margin: 30px 0 0 0;
  }
}

h4.subtitle {
  margin: 0 50px;
  @media(max-width: 600px) {
    text-align: center;
    margin: 0;
  }
}

.change-modal-text {
  color: black;
}

.button-center {
  display: flex;
  justify-content: center;
}

.video-container {
  width: 40vw;
  height: 22vw;
  iframe {
      width: 100%;
      height: 22vw;
    }
}
.md-layout {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;

  &-item {
    display: flex;
    flex-direction: column;
    @media(max-width: 600px) {
      align-items: center;
    }
  }
}
@media only screen and (max-width: 1000px) {
  .video-container {
    display: none;
  }
}

.watch-video{
  margin-bottom: 20px;
}
@media only screen and (min-width: 1000px) {
  .watch-video {
    display: none;
  }
}


</style>