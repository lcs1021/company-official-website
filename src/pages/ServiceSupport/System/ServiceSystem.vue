<template>
    <div>
        <TheHeader/>
        <Product/>
        <FooterBar/>
    </div>
</template>

<script>
import TheHeader from './Header/index.vue'
import Product from './Content/index.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
    name:'ServiceSystem',
    components:{
        TheHeader,
        Product,
        FooterBar
    }
}
</script>

<style scoped>

</style>