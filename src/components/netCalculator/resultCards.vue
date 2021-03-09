<template>
  <div class="q-pa-md row ">
    <noCalculateDisplay class="bg-grey-3" v-if="areaCalculation.length === 0 || areaCalculation === null || areaCalculation === []"/>
    <q-card class="my-card full-width q-ma-sm" v-for="(calculate, key) in areaCalculation[0]" :key="key"
            v-else>

      <q-card-section class="bg-indigo-3 text-black text-center">
        <div class="col">
          <div class="row justify-center">
            <div class="text-subtitle2 q-ma-sm">Length: {{ calculate.x }}</div>
            <div class="text-subtitle2 q-ma-sm">Overlap-length: {{ calculate.overlapX }}</div>
          </div>

          <div class="row justify-center">
            <div class="text-subtitle2 q-ma-sm">Width: {{ calculate.y }}</div>
            <div class="text-subtitle2 q-ma-sm">Overlap-width: {{ calculate.overlapY }}</div>
          </div>

          <div class="row justify-center">
            <div class="text-subtitle2 q-ma-sm">Diameter: {{ calculate.diameter }}</div>
            <div class="text-subtitle2 q-ma-sm">Slot size: {{ calculate.SlotSize }}</div>
            <div class="text-subtitle2 q-ma-sm">Extra overlap: {{ calculate.ExtraOverlap }}</div>
          </div>

        </div>
        <div class="text-h6"> {{ calculate.date }}</div>

      </q-card-section>

      <q-card-actions align="around">
        <div class="text-subtitle1 ">Size: {{ calculate.areaSize }}</div>
        <div class="text-subtitle1">Nets: {{ calculate.nets }}</div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>

import noCalculateDisplay from "components/netCalculator/noCalculateDisplay";

import {mapState, mapActions} from "vuex"

export default {
  name: 'resultCards',
  data() {
    return {

    }
  },
  components: {
    noCalculateDisplay
  },
  computed: {
    ...mapState('nets', ['areaCalculation'])
  },
  methods: {
    ...mapActions('nets', ['getCalculates']),
   async setData() {
    await this.getCalculates()
   }
  },
  created() {
  this.setData()
  }
}
</script>
