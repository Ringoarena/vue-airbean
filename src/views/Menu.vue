<template>
<main>
    <h1>Meny</h1>
    <section>
        <MenuItem :key="item.id" v-for="item in menuItems" :item="item" />
    </section>
    
</main>
  
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'

export default {
    components: {
        MenuItem
    },
    data() {
        return {
        }
    },
    computed: {
        menuItems() {
            return this.$store.state.menuItems;
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    background-color: #f3e4e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    section {
        width: 90%;
    }
}
</style>