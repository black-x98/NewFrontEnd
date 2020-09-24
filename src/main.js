import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import vuex from 'vuex';

new Vue({
  el: '#app',
  router,
  vuetify,
  axios,
  vuex,
  render: h => h(App),
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  }
})
