<template>

    <v-app-bar app absolute color="white" elevate-on-scroll elevation="4">
        <v-app-bar-nav-icon @click="$emit('handeDrawer')"></v-app-bar-nav-icon>
        <v-spacer />
        <v-col lg="6" cols="12">
            <v-form class="mt-5">
                <v-text-field rounded outlined dense placeholder="Search here" append-icon="mdi-marginfy" />

            </v-form>

        </v-col>

        <v-spacer />

        <template>
            <v-row align="center" justify="space-around">
                <v-btn @click="logout" >
                    logout
                </v-btn>
            </v-row>
        </template>
    </v-app-bar>

</template>

<script>
export default {
    name: "Header",

    data: () => ({

        menus: [
            { title: 'Profile', icon: 'mdi-account' },
            { title: 'Change passwrd', icon: 'mdi-key' },
            { title: 'Setting', icon: 'mdi-cog' },
            { title: 'Logout', icon: 'mdi-logout' }
        ]
    }),
    props: ["x"],
    methods: {
        logout: function () {
            this.$keycloak.logout({ "redirectUri": "http://localhost:3000/" })
        }
    }

}
</script>