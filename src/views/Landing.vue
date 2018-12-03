<template>
  <div class="wrapper">
    <landing-header/>
    <div class="main main-raised">
      <estadisticas/>
      <visualizaciones/>
      <conclusiones/>
      <codigo/>
      <tecnologias/>
    </div>
  </div>
</template>

<script>
import zenscroll from "zenscroll"
import LandingHeader from "@/components/landing/LandingHeader.vue"
import Estadisticas from "@/components/landing/Estadisticas.vue"
import Visualizaciones from '@/components/landing/Visualizaciones.vue'
import Conclusiones from '@/components/landing/Conclusiones.vue'
import Codigo from '@/components/landing/Codigo.vue'
import Tecnologias from '@/components/landing/Tecnologias.vue'

export default {
  bodyClass: "landing-page",
  components: {
    LandingHeader,
    Estadisticas,
    Visualizaciones,
    Conclusiones,
    Codigo,
    Tecnologias
  },
  data: function () {
    return {
      name: null,
      email: null,
      message: null
    };
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}

.main-raised {
  margin: 0;
  border-radius: 0;
}

.page-header {
  min-height: 750px;
  @media(max-width: 991px) {
    background-attachment: fixed;
  }
}
</style>
