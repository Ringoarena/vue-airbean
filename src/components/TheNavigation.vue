<template>
  <nav :class="{openClass: menuIsOpen}">
      <button @click="closeNav">&times;</button>
      <router-link :to="{name: 'Menu'}">Meny</router-link>
      <router-link :to="{name: 'About'}">Vårt Kaffe</router-link>
      <router-link :to="{name: 'Profile'}">Min profil</router-link>
      <router-link :to="{name: 'Status'}">Orderstatus</router-link>
  </nav>
</template>

<script>
export default {
    methods: {
        closeNav() {
            this.$store.dispatch("closeNav");
        }
    },
    computed: {
        menuIsOpen() {
            return this.$store.state.menuIsOpen;
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(165, 165, 165);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align: center;

    a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 1rem;
        display: block;
        transition: 0.3s;
    }

    a:hover {
        color: green;
    }

    button {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
}
.openClass {
    width: 100%;
}

</style>