import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Keycloak from 'keycloak-js'
Vue.config.productionTip = false

let initOptions = {

  url : 'http://localhost:8080/auth',
  realm : 'test_realm',
  clientId : 'vue-app',
  onLoad  : 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({onLoad: initOptions.onLoad}).then( auth => {
  if (!auth) {
    window.location.reload();
  } else {
    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App, { props : {keycloak: keycloak}},)
    }).$mount('#app')
    if (keycloak.idTokenParsed.groups[0] == "admin") {
      store.state.admin = true
    }
    console.log(keycloak)
  }
}).catch(() => {
  alert("Login Failure")
});

Vue.prototype.$keycloak = keycloak