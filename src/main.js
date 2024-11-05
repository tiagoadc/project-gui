import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/layout.scss';
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import AOS from 'aos'
import 'aos/dist/aos.css'

import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
import { Fade, Parallax, AutoPlay } from "@egjs/flicking-plugins";
const plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false })];


Vue.use(Flicking);


Vue.use(Vuesax,  {})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  methods: {

  },
  mounted(){
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')

