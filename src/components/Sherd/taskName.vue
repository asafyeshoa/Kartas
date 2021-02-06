<template>
  <q-input
    autofocus
    outlined
    :value="name"
    @input="$emit('update:name', $event)"
    label="Take name"
    class="col"
    :rules="[val => !!val || 'Field is required']"
    ref="name"


  >
    <template v-slot:append>
      <q-icon  v-if="name" name="close" @click="$emit('update:name', '')" class="cursor-pointer" />
    </template>

  </q-input>
</template>

<script>
export default {
  name: "taskName",
  props: ['name'],
  directives: {
    selectAll: {
      bind(el) {
        let input = el.querySelector('.q-field-native')
        input.addEventListener('focus', () => {
          if(input.value.length) {
            input.select()
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
