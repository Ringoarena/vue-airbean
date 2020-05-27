<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheNavigation from "@/components/TheNavigation.vue"
import TheFooter from "@/components/TheFooter.vue"

export default {
  components:{
    TheHeader,
    TheFooter,
    TheNavigation
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>