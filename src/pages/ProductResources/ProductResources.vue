<template>
   <div>
        <ProductHeader/>
        <ProductNavigation/>
        <FooterBar/>
   </div>
</template>

<script>
import ProductHeader from './Header/ProductHeader.vue'
import ProductNavigation from './Header/ProductNavigation.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
    name: 'ProductResources',
    components:
    {
        ProductHeader,
        ProductNavigation,
        FooterBar
    },
}
</script>
