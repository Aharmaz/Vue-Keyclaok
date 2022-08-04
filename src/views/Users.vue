<template>
    <div class="dashboard">
         <TableauUser :headers="headers" :users="users"/>
    </div>
</template>

<script>
import axios from "axios"
import TableauUser from '@/components/tableauUser.vue'
export default {
    name: "Devices",
    data() {
        return {
            headers: [
                {
                    text: "firstname",value :"firstname"
                },
                { text: "lastname", value: "lastname" },
                { text: "salary (DH)", value: "salary" },
                { text: "phone ", value: "phone" },
                { text: "email", value: "email" },
                { text: "role", value: "role" },
            ],
            users: [],
        };
    },
    mounted: function () {

    axios

      .get('http://localhost:3000/users')
      .then(response => (this.users = response.data))
      .catch(function (error) {
        console.log(error);
      })
  },
   
    components: { TableauUser }
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