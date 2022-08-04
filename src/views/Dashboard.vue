<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>Dashboard </h3>
        </v-subheader>
        <Cardcomposants :device="device" />
        <v-row>
            <v-col>
                <v-card>
                    <v-data-table caption=" all devices :" :headers="headers" :items="devices" :items-per-page="5"
                        class="elevation-1" @click:row="(item) => changeDevice(item.id)">
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Cardcomposants from '@/components/cardcomposants.vue'
import axios from "axios"
export default {
    name: "Dashboard",
    data() {
        return {
            activityLog: [
                { title: "Total Products", amount: 50, icon: "mdi-account", color: "cyan lighten-3" },
                { title: "Total Customer", amount: 3433, icon: "mdi-account-group-outline", color: "green darken-2" },
                { title: "Total Sale", amount: 3433, icon: "mdi-account-group-outline", color: "blue-grey darken-1" },
                {
                    title: "Pending Orders",
                    amount: 3433,
                    icon: "mdi-account-group-outline",
                    color: "deep-orange darken-1"
                },
            ],
            headers: [
                {
                    text: "Name of device", value: "name"
                },
                { text: "internet_speed (GB)", value: "internet_speed" },
                { text: "speed (Km/H)", value: "speed" },
                { text: "temperature (°C)", value: "temperature" },
                { text: "batry (%)", value: "batry" },
                { text: "distance (Km)", value: "distance" }
            ],
            device: {
                id: "1",
                name: "tessla",
                internet_speed: 1.5,
                speed: 66,
                temperature: 24,
                batry: 85,
                distance: 350,
                image: "auto.jpg",
            },
            devices: [],
            x: ''
        };
    },
    mounted: function () {

        axios

            .get('http://localhost:3000/devices')
            .then(response => (this.devices = response.data))
            .catch(function (error) {
                console.log(error);
            })

    },
    methods: {
        changeDevice(id) {
            console.log(id);
            for (let i = 0; i < this.devices.length; i++) {

                if (this.devices[i].id === id) {
                    this.device = this.devices[i]
                }
            }
        }
    },

    components: { Cardcomposants }
}
</script>

<style scoped>
.overlap-icon {
    position: absolute;
    top: -33px;
    text-align: center;
    padding-top: 12px;
}
</style>