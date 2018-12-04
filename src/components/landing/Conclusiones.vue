<template>
  <div class="section" id="conclusiones">
    <div class="container">
      <div class="md-layout">
        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
          <h2 class="title text-center">Conclusiones</h2>
          <svg height="10" width="150">
              <line x1="0" y1="0" x2="150" y2="0" style="stroke:rgb(76,174,81);stroke-width:4" />
            </svg>
            <h4>Conclusiones y datos más importantes obtenidos a través de las visualizaciones:</h4>
            <ul>
              <li>
                La relación coste/propina es bastante lineal, pudiéndose observar que generalmente el cliente presenta un 9.5-10% de propina respecto de la tarifa total.
              </li>
              <br>
              <li>
                Los costes más altos se producen durante la madrugada aunque también es en ese momento cuando se recorren las distancias más largas.
              </li>
              <br>
              <li>
                La mayoría de los trayectos tienen el origen y el destino dentro del mismo barrio de NYC.
              </li>
              <br>
              <li>
                Las salidas desde el Aeropuerto JFK son numerosas y se dan en todas direcciones mientras que aquellos trayectos que tienen como destino final ese mismo aeropuerto, son escasos y mayoritariamente salen desde Manhattan.
              </li>
              <br>
              <li>
                Como distrito más rentable hemos encontrado que principalmente Queens_14 y secundariamente Queens_16, son distritos bastante interesantes pues tienen una alta actividad diaria y tanto el coste por trayecto como las propinas recibidas son altas (de 3 a 5 veces superiores a el promedio en Manhattan). 
                <br> Esto parece ser debido a la presencia de los Aeropuertos JFK y Aeropuerto de La Guardia en estos distritos, respectivamente.
              </li>
              <br>
              <li>
                Como dato curioso, se ha observado que aquellas tarifas que han sido negociadas, tienen un coste promedio bastante más alto que la media.
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Visualizaciones'
}
</script>

<style scoped>
svg {
  display: block;
  margin: auto;
  margin-bottom: 30px;
}
li {
  text-align: left;
  font-size: 16px;
}
h4 {
  text-align: left;
}
</style>
