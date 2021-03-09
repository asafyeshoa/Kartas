<template>
  <div class="q-pa-sm justify-center">
    <div class="row justify-center">
      <q-btn style="margin: auto" label="new calculate"  color="accent" icon="add" center @click="toolbar = true"/>


    </div>

    <q-dialog v-model="toolbar">
      <q-card class="q-pa-sm">

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-sm"
        >
          <div class="text-h5 text-center ">Enter Measurements</div>

          <div class="row full-width justify-center">
            <q-input
              class="q-ma-sm"
              style="width: 30%"
              filled
              type="number"
              v-model="details.x"
              hint="Length"
              lazy-rules
            />

            <q-input
              class="q-ma-sm"
              style="width: 30%"
              filled
              type="number"
              v-model="details.overlapX"
              hint="Overlap-length"
              lazy-rules
            />
          </div>
          <div class="row full-width justify-center">
            <q-input
              class="q-ma-sm"
              style="width: 30%"
              filled
              type="number"
              v-model="details.y"
              hint="Width"
              lazy-rules
            />

            <q-input
              class="q-ma-sm"
              style="width: 30%"
              filled
              type="number"
              v-model="details.overlapY"
              hint="Overlap-width"
              lazy-rules
            />
          </div>
          <div class="row justify-center">
            <div class="col justify-center">
            <p class="text-center">Diameter size</p>
            <q-tabs
              v-model="details.diameter"
              no-caps
              class="bg-blue-grey-2 text-black shadow-2"
            >
              <q-tab name="6" label="6" />
              <q-tab name="8" label="8" />
              <q-tab name="10" label="10" />
            </q-tabs>
            </div>


          </div>
          <div class="row justify-center">
            <div class="col justify-center">
            <p class="text-center">Slot size</p>
            <q-tabs
              v-model="details.SlotSize"
              no-caps
              class="bg-blue-grey-4 text-black shadow-2"
            >
              <q-tab name="10" label="10" />
              <q-tab name="15" label="15" />
              <q-tab name="20" label="20" />
            </q-tabs>
            </div>


          </div>


          <div class=" row justify-center">
            <q-btn style="width: 40%" label="Calculate" type="submit" color="primary"/>
            <q-btn style="width: 40%" label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
          </div>
        </q-form>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      toolbar: false,
      details: {
        x: 0,
        y: 0,
        overlapX: 0,
        overlapY: 0,
        diameter: 0,
        SlotSize: 0
      },
    }
  },
  methods: {
    ...mapActions('nets',['addAreaCalculation']),
    onSubmit() {
      console.log(this.details)
      if(this.details.x !== null &&
        this.details.y !== null &&
        this.details.overlapY !== null &&
        this.details.overlapX !== null &&
        this.details.diameter !== null &&
        this.details.SlotSize !== null) {
        this.addAreaCalculation(this.details)
        this.toolbar = false

      } else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Fill all details please'
        })
      }

    },

    onReset() {
      this.details = {
        x: null,
        y: null,
        overlapX: null,
        overlapY: null,
        diameter: null,
        SlotSize: null
      }
      this.$q.notify({
        color: 'blue-5',
        textColor: 'white',
        icon: 'cleaning_services',
        message: 'All fields are clear'
      })
    },

  }
}
</script>
