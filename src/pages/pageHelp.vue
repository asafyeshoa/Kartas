<template>
  <q-page padding>
    <q-btn flat color="primary" icon="chevron_left" label="Back" to="/settings" />

    <h5 class="text-center" >Kartas - Daily work management</h5>
  <p class="text-center"> Kartas is daily tasks managements to organized and complete daily tasks</p>
  <p class="text-center"> Include live chat to communicated with your coworkers!</p>
  <p class="text-center"> Kartas also provide Math and Area calculators which add in the feature </p>

    <div class="items-center text-center " style="margin-top: 40px ">
    <q-btn style="text-align: center" color="negative" to="/" push>
      <div class="row items-center no-wrap">
        <q-icon left name="play_for_work" />
        <div class="text-center">
          Get<br>Started
        </div>
      </div>
    </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "helpPage"
}
</script>

<style scoped>

</style>
