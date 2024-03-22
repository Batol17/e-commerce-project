import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'


/*

pinia config
*/
import { createStore } from 'vuex'


 /* 
 font awesome icons
   */ 
  import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

   
 /*
    Bootstrap 
   */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';



// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App)

app.use(vuetify).use(createStore).use(router).use(VueTelInput)

app.mount('#app')
