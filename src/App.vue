<template>
  <v-app id="inspire">
  <Header @handeDrawer="drawer=!drawer" :x="keycloak" />
  <SideBar :drawer="drawer" :x="keycloak" />
    <v-main>
      <v-container class="py-8 px-6" fluid>
         <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from './components/SideBar.vue';
import Header from './components/Header.vue';
export default {
    data: () => ({
        cards: ["Today", "Yesterday"],
        drawer: true,
      
        
    }),
    props:["keycloak"],
    components: { SideBar ,Header},

}
</script>