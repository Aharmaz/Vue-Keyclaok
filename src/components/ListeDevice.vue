<template>
    <v-row>
      <v-col>
                <v-card>
                    <v-data-table
                            caption="Recent Order list"
                            :headers="headers"
                            :items="devices"
                            :items-per-page="5"
                            class="elevation-1"
                    >
                        <template v-slot:item.action="">
                            <v-btn color="success" outlined small shaped >View</v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
    </v-row>
</template>
<script>
export default{
    name:"ListeDevice",
    props:["devices","headers","modelValue"],


methods: {
    changeDevice(id){
return{

}
    }
},


}
</script>