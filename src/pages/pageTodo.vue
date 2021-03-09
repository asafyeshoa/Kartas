<template>
  <q-page  >
    <div>
      <todo/>
      </div>
  </q-page>
</template>

<script>


import todo from "components/Tasks/todo";
export default {
  name: 'index',
  components:{todo},
    data(){
      return{

      }
    },

}
</script>
<style>


</style>
