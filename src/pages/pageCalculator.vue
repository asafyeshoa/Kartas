<template>
  <q-page padding>
    <addCalculate/>
    <resultCards/>

  </q-page>
</template>

<script>

import resultCards from "components/netCalculator/resultCards";
import addCalculate from "components/netCalculator/addCalculate";
export default {
  name: "pageCalculator",
  components: {
    resultCards,
    addCalculate
  }
}
</script>

<style scoped>

</style>
