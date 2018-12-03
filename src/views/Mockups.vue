<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>

      <!-- CARTO: For responsive computer -->
        <div class="md-layout responsive-computer">
          <div class="md-layout-item md-size-66 md-small-size-66 md-xsmall-size-100 md-medium-size-80 mx-auto">
            <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs md-sync-route class="md-warning" md-alignment="right">
                <md-tab id="tab-home" md-label="Mockup de la Web">
                  <img id="mockup-web" :src="mockup_web" alt="mockup_web">
                  {{mockupWebUpdated}}
                </md-tab>
                <md-tab id="tab-pages" md-label="Mockup Dashboards Tableau">
                 <img id="mockup-tableau" :src="mockup_tableau" alt="mockup_tableau">
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
          </div>
        </div>
        
        <!-- CARTO: For responsive mobile -->
          <div class="md-layout responsive-mobile">
            <div class="md-layout-item md-size-100 md-small-size-100">
              <tabs
                :tab-name="['Mockup de la Web', 'Mockup Dashboards Tableau']"
                :tab-icon="['web', 'web_asset']"
                plain
                nav-pills-icons
                color-button="warning">

                <template slot="tab-pane-1">
                  <img :src="mockup_web" alt="mockup_web">
                </template>
                <template slot="tab-pane-2">
                  <img :src="mockup_tableau" alt="mockup_tableau">
                </template>
              </tabs>
            </div>
          </div>



    </div>
</template>

<script>
// import MockupHeader from "@/components/landing/MockupHeader.vue"
import { NavTabsCard } from "@/components";
import { Tabs } from "@/components";

export default {
  components: {
    // MockupHeader,
    NavTabsCard,
    Tabs
  },
  bodyClass: "mockup-page",
  data() {
    return {
      mockup_web: require("@/assets/img/mockup_web.png"),
      mockup_tableau: require("@/assets/img/mockup_tableau.png"),
      mockupWebUpdated: false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/fondo.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    setTimeout(_ => this.mockupWebUpdated = '', 1000)
  }
};
</script>

<style lang="scss" scoped>
.md-layout {
  margin-top: -80vh;
  background-color: white;
}
@media only screen and (max-width: 768px) {
  .responsive-computer {
    display: none;
  }
}

.responsive-mobile {
  margin: 0;
  margin-top: -80vh;
  & .md-layout-item {
    padding: 0;
  }
}
@media only screen and (min-width: 769px) {
  .responsive-mobile {
    display: none;
  }
}

/deep/ .md-list-item-content {
  color: white!important;
}
</style>