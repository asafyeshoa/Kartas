<template>
  <q-input outlined label="Due time"
           :value="time"
           class="col"
           @input="$emit('update:time', $event)"
  >
    <template v-slot:append>
      <q-icon  v-if="time" name="close" @click="$emit('update:time', '')" class="cursor-pointer"  />
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">

          <q-time
            :value="time"
            @input="$emit('update:time', $event)"
          >

            <div class="row items-center justify-end">

              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "taskTime",
  props:['time']
}
</script>

<style scoped>

</style>
