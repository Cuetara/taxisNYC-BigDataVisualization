<template>
  <div class="section">
    <div class="container">
      <div class="margin-visualization">
        <h2 class="title text-center">Visualizaciones</h2>
        <svg height="10" width="150">
          <line x1="0" y1="0" x2="150" y2="0" style="stroke:rgb(76,174,81);stroke-width:4" />
        </svg>
      </div>

      <!-- TABLEAU: For responsive computer  -->
      <div v-if="!isMobile" class="md-layout responsive-computer" id="tableau">
        <div class="md-layout-item md-xsmall-size-100 mx-auto text-center margin-top">
          <h3>Tableau</h3>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs md-sync-route class="md-warning" md-alignment="right">
                <md-tab id="tab-home" md-label="General">
                  <Tableau 
                    idTableau="dashboard1"
                    url="https://public.tableau.com/views/Dash2_38/Dash1?:embed=y&:display_count=yes&publish=yes"
                    :height="height" 
                    :width="width">
                  </Tableau>
                </md-tab>
                <md-tab id="tab-pages1" md-label="Relaciones">
                  <Tableau 
                    idTableau="dashboard2"
                    url="https://public.tableau.com/views/Dash2_38/Dash2?:embed=y&:display_count=yes&publish=yes"
                    :height="height" 
                    :width="width">
                  </Tableau>
                </md-tab>
                <md-tab id="tab-pages" md-label="Análisis Barrios">
                  <Tableau 
                    idTableau="dashboard3"
                    url="https://public.tableau.com/views/Dash2_38/Dash3?:embed=y&:display_count=yes&publish=yes" 
                    :height="height" 
                    :width="width">
                  </Tableau>
                </md-tab>
                <md-tab id="tab-posts" md-label="Trayectos a Aeropuertos">
                 <Tableau 
                    idTableau="dashboard4"
                    url="https://public.tableau.com/views/Dash2_38/Dash4?:embed=y&:display_count=yes&publish=yes" 
                    :height="height" 
                    :width="width">
                  </Tableau>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>

      <!-- TABLEAU: For responsive mobile -->
      <div v-if="isMobile" class="md-layout responsive-mobile" id="tableau-mobile">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="['General', 'Ingresos', 'Zonas']"
            :tab-icon="['dashboard', 'attach_money', 'place']"
            plain
            nav-pills-icons
            color-button="warning">

            <template slot="tab-pane-1">
              <Tableau 
                idTableau="dashboard1-mobile"
                url="https://public.tableau.com/views/Dash2_38/Dash1-Mobile?:embed=y&:display_count=yes"
                :height="heightMobile" 
                :width="widthMobile">
              </Tableau>
            </template>
            <template slot="tab-pane-2">
              <Tableau 
                idTableau="dashboard2-mobile"
                url="https://public.tableau.com/views/Dash2_38/Dash2-Mobile?:embed=y&:display_count=yes"
                :height="heightMobile" 
                :width="widthMobile">
              </Tableau>
            </template>
            <template slot="tab-pane-3">
              <Tableau 
                idTableau="dashboard3-mobile"
                url="https://public.tableau.com/views/Dash2_38/Dash3-Mobile?:embed=y&:display_count=yes" 
                :height="heightMobile" 
                :width="widthMobile">
              </Tableau>
            </template>
          </tabs>
        </div>
      </div>

      <!-- D3.js: For responsive computer -->
      <div class="md-layout responsive-computer" id="d3">
        <div class="md-layout-item md-xsmall-size-100 mx-auto text-center margin-top">
          <h3>D3.js &nbsp &nbsp</h3>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs md-sync-route class="md-warning" md-alignment="right">
                <md-tab id="tab-pages" md-label="Trayectos principales">
                  <div id="3-map">
                  <h4><span id="3-span">Flujo de trayectos entre diferentes barrios</span>, New York</h4>
                  </div>
                  <d3-map id-map="d3-map" span-id="3-span"/>
                  <v-popover offset="4" placement="bottom"> 
                    <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                    <template slot="popover">
                      <div class="popover-body">
                        Basado en este <a href="https://mbostock.github.io/d3/talk/20111116/airports.html" target="_blank">ejemplo de Mike Bostock</a>. 
                        <br>
                        <br>
                        En esta visualización se integran varios archivos necesarios:
                        <br>
                        1º: Un archivo JSON con la silueta de los distritos de NYC para hacer el mapa base.
                        <br>
                        2º: Un archivo CSV con las coordenadas geográficas del centroide de cada uno de los distritos. Este dataset se ha obtenido a través de Carto.
                        <br>
                        3º: Un archivo CSV con cada una de las rutas y frecuencia de los trayectos. Obtenido mediante Python.
                      </div>
                    </template>
                  </v-popover>
                </md-tab>
                <md-tab id="tab-posts" md-label="Flujo entre distritos">
                  <h4>Diagrama chord del flujo de taxis verdes entre distritos</h4>
                  <d3-chord id-chord="d3-chord"/>
                  <v-popover offset="4" placement="bottom"> 
                    <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                    <template slot="popover">
                      <div class="popover-body">
                        Basando en el diagrama de chord <a href=" http://bl.ocks.org/AndrewRP/7468330" target="_blank">Andrew's Chord Example</a>. 
                        <br>
                        <br>
                        Se le ha pasado un archivo JSON compuesto por una matriz diagonal con información sobre el número de trayectos entre cada uno de los barrios con los demás y consigo mismo.
                        <br>
                        <br>
                        Esta matriz ha sido obtenida a través de Python y podemos ver su desarrollo en el correspondiente Jupyter Notebook, presentado más abajo.
                      </div>
                    </template>
                  </v-popover>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>

      <!-- D3.js: For responsive mobile -->
      <div class="md-layout responsive-mobile" id="d3-mobile">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="['Trayectos', 'Flujo entre distritos']"
            :tab-icon="['timeline', 'autorenew']"
            plain
            nav-pills-icons
            color-button="warning">
            <template class="d3js-mobile" slot="tab-pane-1">
              <div id="3-map-mobile">
              <h4><span id="3-span-mobile">Flujo de trayectos entre diferentes barrios</span>, New York</h4>
              </div>
              <d3-map id-map="d3-map-mobile" span-id="3-span-mobile"/>
              <div class = "button-center">
                <v-popover offset="4" placement="bottom"> 
                  <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                  <template slot="popover">
                    <div class="popover-body">
                        Basado en este <a href="https://mbostock.github.io/d3/talk/20111116/airports.html" target="_blank">ejemplo de Mike Bostock</a>. 
                        <br>
                        <br>
                        En esta visualización se integran varios archivos necesarios:
                        <br>
                        1º: Un archivo JSON con la silueta de los distritos de NYC para hacer el mapa base.
                        <br>
                        2º: Un archivo CSV con las coordenadas geográficas del centroide de cada uno de los distritos. Este dataset se ha obtenido a través de Carto.
                        <br>
                        3º: Un archivo CSV con cada una de las rutas y frecuencia de los trayectos. Obtenido mediante Python.
                      </div>
                  </template>
                </v-popover>
              </div>
            </template>
            <template class="d3js-mobile" slot="tab-pane-2">
              <h4>Diagrama chord del flujo de taxis verdes entre distritos</h4>
              <d3-chord id-chord="d3-chord-mobile"/>
              <div class = "button-center">
                <v-popover offset="4" placement="bottom"> 
                  <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                  <template slot="popover">
                    <div class="popover-body">
                        Basando en el diagrama de chord <a href=" http://bl.ocks.org/AndrewRP/7468330" target="_blank">Andrew's Chord Example</a>. 
                        <br>
                        <br>
                        Se le ha pasado un archivo JSON compuesto por una matriz diagonal con información sobre el número de trayectos entre cada uno de los barrios con los demás y consigo mismo.
                        <br>
                        <br>
                        Esta matriz ha sido obtenida a través de Python y podemos ver su desarrollo en el correspondiente Jupyter Notebook, presentado más abajo.
                      </div>
                  </template>
                </v-popover>
              </div>
            </template>
          </tabs>
        </div>
      </div>

      <!-- CARTO: For responsive computer -->
      <div v-if="!isMobile" class="md-layout responsive-computer" id="carto">
        <div class="md-layout-item md-xsmall-size-100 mx-auto text-center margin-top">
          <h3>Carto &nbsp &nbsp</h3>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs md-sync-route class="md-warning" md-alignment="right">
                <md-tab id="tab-home" md-label="Mapa General">
                  <h4>Localización de los centroides de cada uno de los distritos de NYC</h4>
                  <p>El tamaño y color de los centroides va en función del nivel de pickups que se producen en esa zona.</p>
                  <iframe width="100%" height="520" frameborder="0" src="https://cuetaracrema.carto.com/builder/cc898b0f-f4ea-4ba0-853c-1f361ebfadd0/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                  <v-popover offset="4" placement="bottom"> 
                    <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                    <template slot="popover">
                      <div class="popover-body">
                        Esta visualización está hecha con tres conjuntos de datos, cada uno de las cuales provee diferente información: uno sobre los distritos de NY, otro sobre los barrios y el tercer archivo es nuestro dataset. 
                        <br>
                        <br>
                        El dataset sobre los barrios simplemente se ha agregado como una capa mientras que los otros dos han sufrido un proceso de transformación e intersección:
                        <br>
                        1. La capa sobre distritos se ha intersectado 4 veces con nuestro dataset, dos para saber qué puntos de nuestro dataset pertenecían a qué distrito (una vez para pickups y otra vez para dropoffs) y otras dos para obtener el coste y propina promedio en cada distrito (esto último se ha hecho sobre la capa con los datos sobre pickups).
                        <br>
                        2. Tanto en la capa de pickups como en la de dropoffs, se han obtenido los centroides de los distritos y más tarde juntado mediante un análisis de agregación de columnas de un 2º dataset. Esto se ha hecho para poder tener toda la información en la misma capa y poder mostrarla a la vez en los pop-ups.
                      </div>
                    </template>
                  </v-popover>
                </md-tab>
                <md-tab id="tab-pages" md-label="Animación: Un día en Taxi">
                  <h4>Visualización que muestra la ruta realizada por un taxi amarillo al azar durante un día</h4>
                  <iframe width="100%" height="520" frameborder="0" src="https://cuetaracrema.carto.com/builder/266c0db9-bf05-4bc3-833c-4b9770646c25/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                  <v-popover offset="4" placement="bottom"> 
                    <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                    <template slot="popover">
                      <div class="popover-body">
                        Este mapa está inspirado en <a href="http://chriswhong.github.io/nyctaxi/" target="_blank">esta visualización de Chris Whong</a>, sitio de donde también hemos obtenido el dataset trabajado. Este dataset era muy grande por lo que, a través de Python, se tuvieron que seleccionar los datos de un día en concreto para un único taxi. 
                        <br>
                        <br>
                        Mediante Python, también se realizó el correspondiente tratamiento de los datos, obteniendo las rutas de los trayectos a través de una llamada a la API de Google Maps. Puedes ver este tratamiento más abajo, en el correspondiente cuaderno Jupyter.
                        <br>
                        <br>
                        En este caso, el proceso para la visualización ha sido más sencillo. Este mapa tiene 4 capas, dos capas correspondientes a los pickups y dropoffs geocodificados del dataset anterior, otra capa del GEOJSON de la ruta obtenida a través de la API de Google Maps y una última capa que contiene información sobre todas las longitudes y latitudes que abarca el GEOJSON, puestas temporalmente para crear el efecto animación.
                      </div>
                    </template>
                  </v-popover>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>

      <!-- CARTO: For responsive mobile -->
      <!-- <carto-mobile/> -->
      <div v-if="isMobile" class="md-layout responsive-mobile" id="carto-mobile">
        <div class="md-layout-item md-size-100 md-small-size-100">
          <tabs
            :tab-name="['Mapa General', 'Animación: Un día en taxi']"
            :tab-icon="['map', 'local_taxi']"
            plain
            nav-pills-icons
            color-button="warning">
              <template slot="tab-pane-1">
                <iframe width="100%" height="520" frameborder="0" src="https://cuetaracrema.carto.com/builder/cc898b0f-f4ea-4ba0-853c-1f361ebfadd0/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                <div class = "button-center">
                  <v-popover offset="4" placement="bottom"> 
                    <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                    <template slot="popover">
                      <div class="popover-body">
                        Esta visualización está hecha con tres conjuntos de datos, cada uno de las cuales provee diferente información: uno sobre los distritos de NY, otro sobre los barrios y el tercer archivo es nuestro dataset. 
                        <br>
                        <br>
                        El dataset sobre los barrios simplemente se ha agregado como una capa mientras que los otros dos han sufrido un proceso de transformación e intersección:
                        <br>
                        1. La capa sobre distritos se ha intersectado 4 veces con nuestro dataset, dos para saber qué puntos de nuestro dataset pertenecían a qué distrito (una vez para pickups y otra vez para dropoffs) y otras dos para obtener el coste y propina promedio en cada distrito (esto último se ha hecho sobre la capa con los datos sobre pickups).
                        <br>
                        2. Tanto en la capa de pickups como en la de dropoffs, se han obtenido los centroides de los distritos y más tarde juntado mediante un análisis de agregación de columnas de un 2º dataset. Esto se ha hecho para poder tener toda la información en la misma capa y poder mostrarla a la vez en los pop-ups.
                      </div>
                    </template>
                  </v-popover>
                </div>
              </template>
              <template slot="tab-pane-2">
                <iframe width="100%" height="520" frameborder="0" src="https://cuetaracrema.carto.com/builder/e291d7b8-d032-4cb9-bdaa-aaf4c6729d1d/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
               <div class = "button-center">
                  <v-popover offset="4" placement="bottom"> 
                    <md-button class="md-rose md-lg">¿Cómo se hizo?</md-button>
                    <template slot="popover">
                      <div class="popover-body">
                        Este mapa está inspirado en <a href="http://chriswhong.github.io/nyctaxi/" target="_blank">esta visualización de Chris Whong</a>, sitio de donde también hemos obtenido el dataset trabajado. Este dataset era muy grande por lo que, a través de Python, se tuvieron que seleccionar los datos de un día en concreto para un único taxi. 
                        <br>
                        <br>
                        Mediante Python, también se realizó el correspondiente tratamiento de los datos, obteniendo las rutas de los trayectos a través de una llamada a la API de Google Maps. Puedes ver este tratamiento más abajo, en el correspondiente cuaderno Jupyter.
                        <br>
                        <br>
                        En este caso, el proceso para la visualización ha sido más sencillo. Este mapa tiene 4 capas, dos capas correspondientes a los pickups y dropoffs geocodificados del dataset anterior, otra capa del GEOJSON de la ruta obtenida a través de la API de Google Maps y una última capa que contiene información sobre todas las longitudes y latitudes que abarca el GEOJSON, puestas temporalmente para crear el efecto animación.
                      </div>
                    </template>
                  </v-popover>
                </div>
              </template>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/javascript'>
  import { NavTabsCard } from "@/components";
  import { Tabs } from "@/components";
  import Tableau from '@/components/visualizaciones/tableau/Tableau.vue'
  import D3Map from '@/components/visualizaciones/D3js/D3Map.vue'
  import D3Chord from '@/components/visualizaciones/D3js/D3Chord.vue'

  export default {
    name: 'Visualizaciones',
    components: {
      NavTabsCard,
      Tabs,
      Tableau,
      D3Map, 
      D3Chord
    },
  data() {
    return {
      windowWidth: window.innerWidth,
      width: 1000,
      height: 500,
      widthMobile: 300,
      heightMobile: 600,
    };
  },
  computed: {
    isMobile () {

      return this.windowWidth <= 768
    }
  },
  mounted () {
    setTimeout(this.onResize, 4000)
    window.addEventListener('resize', this.onResize, true);
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
      const element = document.querySelector(".md-card-content")
      const elementMobile = document.querySelector(".responsive-mobile .md-card-content")

      this.width = element.clientWidth - 60
      this.height = (element.clientWidth - 60)/2
      this.widthMobile = elementMobile.clientWidth
      this.heightMobile = elementMobile.clientWidth*2
    }
  }
}
</script>

<style lang="scss" scoped>

/deep/ #carto .md-content {
  & iframe {
    height: 500px!important;
  }
}

/deep/ #carto-mobile .tab-content {
  & iframe {
    height: 500px!important;
  }
}

/deep/ .tab-pane-2 {
  width: 100%;
}

.responsive-mobile {
  position: relative;

  & .md-layout-item {
    max-width: 100%;
  }
}

.responsive-computer {
  position: relative;

  & .md-layout-item {
    max-width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .responsive-computer {
    display: none;
  }
}
.responsive-mobile {
  margin-top: 50px;
}
@media only screen and (min-width: 769px) {
  .responsive-mobile {
    display: none;
  }
}

/deep/  .tab-pane-1, .tab-pane-2, .tab-pane-3, .tab-pane-4 {
  width: 100%;
}


/* /deep/ .md-card-content {
  padding: 10px 10px !important;
} */
.button-center {
  display: flex;
  justify-content: center;
}

#text-display-block {
  display: block;
}
svg {
  display: block;
  margin: auto;
  margin-bottom: 30px;
}
h3 {
  position: absolute;
  z-index: 999; 
  width: 90px;
  color: antiquewhite;
  margin: 17px 30px;
}
.margin-top {
  margin-top: 75px;
  position: relative;
}
.margin-visualization{
  margin-bottom: -60px;
}
</style>
