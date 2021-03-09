<template>
  <q-input
    filled
    clearable
    type="textarea"
    color="red-12"
    label="Task description"
    hint="Add notes and details"
    :value="des"
    @input="$emit('update:des', $event)"
    style="width: 100%;"
  />
</template>


<script>


export default {
  name: "desInput",
  props: ['des'],
  data() {
    return {
      textareaModel: ''
    }
  },
}
</script>

<style scoped>

</style>
