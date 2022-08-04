<template>
   <v-navigation-drawer v-model="drawer" app>
      <v-img src="" class="pa-4" >
        <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
        
          <v-img aspect-ratio="30" src="..//assets/default.jpg"  />
        </v-avatar>
        <div>{{x.idTokenParsed.preferred_username}}</div>
        </div>
      </v-img>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text ,to] in links" :key="icon" link :to="to">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    name:"SideBar",
    props:["drawer","x"],
    data: () => ({
        links: [
            ["mdi-microsoft-windows", "Dashboard" ,"/"],
            ["mdi-account-multiple", "Users" ,"/users"],
        ],
    }),
   
}
</script>