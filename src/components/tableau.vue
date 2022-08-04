<template>
    <div class="dashboard">

        <v-card>
            <v-data-table caption="List of all devices :" :headers="headers" :items="devices" :items-per-page="5"
                class="elevation-1">
            </v-data-table>
        </v-card>
    </div>
</template>
<script>
export default{
name:"Tableau",
props:["headers","devices" ]

}
</script>