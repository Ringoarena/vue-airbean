<template>
  <nav :class="{openClass: menuIsOpen}">
      <div @click="closeNav" class="close"><img src="../assets/graphics/close.svg" alt=""></div>
      <p @click="navigate('Menu')">Meny</p>
      <hr>
      <p @click="navigate('About')">Vårt kaffe</p>
      <hr>
      <p @click="navigate('Profile')">Min profil</p>
      <hr>
      <p @click="navigate('Status')">Orderstatus</p>
      <hr>
  </nav>
</template>

<script>
export default {
    methods: {
        navigate(destination) {
            this.$store.dispatch("closeNav");
            this.$router.push({name: destination});
        },
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
    background-color:#2f2926;
    overflow-x: hidden;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
        color: white;
        padding: 3rem;
        font-size: 2rem;
        width: 100%;
        text-align: center;
        transition: 1s;
    }

    p:hover {
        cursor: pointer;
    }

    hr {
        width: 3rem;
        border-color: gray;
    }

    .close {
        position: absolute;
        left: 1.3rem;
        top: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        clip-path: circle();
        background-color: white;
        img {
            width: 1rem;
        }
        cursor: pointer;
    }


}
.openClass {
    width: 100%;
}

</style>