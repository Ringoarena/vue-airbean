<template>
  <div id="app">
    <TheHeader v-if="currentPath != '/' && currentPath != '/status'" />
    <TheNavigation />
    <router-view/>
    <TheFooter v-if="currentPath != '/' && currentPath != '/status'" />
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
  },
  computed:{
    currentPath(){
      return this.$route.path
    }
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