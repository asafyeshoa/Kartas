<template>
  <q-banner dense inline-actions :class="bgColor" class="list-header text-black text-center">
    <span class=" text-bold text-subtitle1" ><slot></slot></span>
    <template v-slot:action>
    </template>
  </q-banner>
</template>

<script>
export default {
  name: "banner",
  props: ['bgColor']
}
</script>

<style scoped>
.list-header{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
