<template>
  <q-banner class="bg-grey-3" v-if="areaCalculation.length === 0 || areaCalculation === null || areaCalculation === []">
    <template v-slot:avatar>
      <q-icon name="calculate" color="primary"/>
    </template>
    Kartas netCalculator is build to supplies a specific need which to calculate number of nets needed to cover
    triangles.
    <q-list style="margin-top: 10px" dense>
      <q-item style="padding: 0px" v-ripple>
        <q-item-section>
          - Nets default size: 2.5 x 6
        </q-item-section>
      </q-item>

      <q-item style="padding: 0px" v-ripple>
        <q-item-section>
          - Formula include overlap
        </q-item-section>
      </q-item>

      <q-item style="padding: 0px" v-ripple>
        <q-item-section>
          - All fields are require
        </q-item-section>
      </q-item>

      <q-item style="padding: 0px" v-ripple>
        <q-item-section>
          Good luck!
        </q-item-section>
      </q-item>

    </q-list>
  </q-banner>
</template>

<script>

import {mapState} from "vuex"


export default {
  name: "noCalculateDisplay",
  computed: {
    ...mapState('nets', ['areaCalculation'])
  },
}
</script>

<style scoped>

</style>
