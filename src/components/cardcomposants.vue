<template>
    <v-row>
        <v-col lg="7" cols="12">
            <v-row>

                <v-col lg="6" cols="12">
                    <v-card elevation="2" class="rounded-lg mx-auto">
                        <v-card-text class="d-flex justify-space-between align-center">
                            <div>
                                <strong>la distance : </strong>
                                <strong>{{ device.distance }} KM </strong> <br />
                                <span>a ce moment la </span>
                            </div>

                            <v-avatar size="60" style="border: 3px solid #444">
                                <span style="color: black">{{ device.speed }} KM </span>
                            </v-avatar>
                        </v-card-text>
                        <v-card-actions class="d-flex  justify-space-between">

                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col lg="6" cols="12">
                    <v-card elevation="2" class="rounded-lg mx-auto">
                        <v-card-text class="d-flex justify-space-between align-center">
                            <div>
                                <strong>la temperature : </strong>
                                <strong>{{ device.temperature }}°C</strong>
                                <br />
                                <span>a ce moment la </span>
                            </div>

                            <v-avatar size="60" style="border: 3px solid #444">
                                <span style="color: black">{{ device.temperature }}°C</span>
                            </v-avatar>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between">

                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col lg="6" cols="12">
                    <v-card elevation="2" class="rounded-lg mx-auto">
                        <v-card-text class="d-flex justify-space-between align-center">
                            <div>
                                <strong>internet speed : </strong>
                                <strong>{{ device.internet_speed }} GB</strong>
                                <br />
                                <span>ce moment </span>
                            </div>
                            <v-avatar size="60" style="border: 3px solid #444">
                                <span style="color: black">{{ device.internet_speed }} GB</span>
                            </v-avatar>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between">

                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col lg="6" cols="12">
                    <v-card elevation="2" class="rounded-lg mx-auto">
                        <v-card-text class="d-flex justify-space-between align-center">
                            <div>
                                <strong> la veteese actuielle: </strong>
                                <strong>{{ device.speed }} KM/H</strong>
                                <br />
                                <span>ce moment </span>
                            </div>
                            <v-avatar size="60" style="border: 3px solid #444">
                                <span style="color: black">{{ device.speed }} KM/H</span>
                            </v-avatar>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between">

                        </v-card-actions>
                    </v-card>
                </v-col>

            </v-row>
        </v-col>
        <v-col cols="12" lg="5">
            <v-card class="mx-auto">
                <v-img :src="require('@/assets/' + device.image +'')" height="240"></v-img>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "CardComposant",
    props: ["device"],
    
}

</script>