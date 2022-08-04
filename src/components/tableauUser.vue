<template>
    <div class="tablaeuuser">

        <v-card>
            <v-data-table caption="All Users :" :headers="headers" :items="users" :items-per-page="4"
                class="elevation-1">
            </v-data-table>
        </v-card>
    </div>
</template>
<script>
export default{

name:"TableauUser",
props:["headers","users" ]

}
</script>


