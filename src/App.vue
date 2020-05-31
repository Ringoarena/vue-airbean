<template>
  <div id="app">
    <TheHeader
      v-if="currentPath != '/' && currentPath != '/status'"
      :style="{background: 
      [currentPath == '/about' || currentPath == '/menu' 
      ? '#f3e4e1' : '#2f2926']}"
    />
    <CartModal />
    <TheNavigation />
    <router-view />
    <TheFooter
      v-if="currentPath != '/' && currentPath != '/status'"
      :style="{background: 
      [currentPath == '/about' || currentPath == '/menu' 
      ? '#f3e4e1'  : '#2f2926']}"
    />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import CartModal from "@/components/CartModal.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheNavigation,
    CartModal
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


/* shit added by chris */
#app {
  margin: 0 auto;
  max-width: 500px;
  min-height: 700px;
}
</style>