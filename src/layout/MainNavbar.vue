<template>
  <md-toolbar id="toolbar" md-elevation="0" class="md-transparent md-absolute" :class="extraNavClasses" :color-on-scroll="colorOnScroll">
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <md-button href="#/landing" class="md-simple md-lg">BIG DATA VISUALIZATION</md-button> 
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: toggledClass}" @click="toggleNavbarMobile()">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item href="#estadisticas">
                <p>Datos Interesantes</p>
              </md-list-item>
              <li class="md-list-item">
                <a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean dropdown">
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button slot="title" class="md-button md-button-link md-white md-simple dropdown-toggle" data-toggle="dropdown">
                        <i class="material-icons">apps</i>
                        <p>Visualización</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a :href="tableauId" >
                            <i class="material-icons">insert_chart_outlined</i>
                            <p>Tableau</p>
                          </a>
                        </li>
                        <li>
                          <a :href="d3Id">
                            <i class="material-icons">bubble_chart</i>
                            <p>D3.js</p>
                          </a>
                        </li>
                        <li>
                          <a :href="cartoId" >
                            <i class="material-icons">map</i>
                            <p>Carto</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <md-list-item href="#conclusiones">
                <p>Conclusiones</p>
              </md-list-item>

              <md-list-item href="#codigo">
                <p>Código Python</p>
              </md-list-item>

              <md-list-item href="#tecnologias">
                <p>Tecnologías</p>
              </md-list-item>

              <md-list-item href="https://www.linkedin.com/in/francisca-suarez-rodriguez/" target="_blank">
                <i class="fab fa-linkedin"></i>
                <p class="hidden-lg">Linkedin</p>
                <md-tooltip md-direction="bottom">Ver perfil de Linkedin</md-tooltip>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      tableauId: undefined,
      d3Id: undefined,
      cartoId: undefined
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    checkSectionsIds () {
      this.tableauId = this.getIdOf('tableau')
      this.d3Id = this.getIdOf('d3')
      this.cartoId = this.getIdOf('carto')
    },
    getIdOf (name) {
      let id = `#${name}`
      return window.innerWidth <= 768 ? `${id}-mobile` : id
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    window.addEventListener("resize", this.checkSectionsIds, true)
    this.checkSectionsIds()
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style lang="scss" scoped>
.title {
  text-transform: uppercase;
}
</style>
