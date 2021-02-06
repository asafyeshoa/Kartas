<template>
  <q-input outlined label="Due date" :value="date"     @input="$emit('update:date', $event)">
    <template v-slot:append>
      <q-icon  v-if="date" name="close" @click="$emit('clear')" class="cursor-pointer"  />
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date :value="date" @input="$emit('update:date', $event)" >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "taskDate",
  props: ['date']
}
</script>

<style scoped>

</style>
