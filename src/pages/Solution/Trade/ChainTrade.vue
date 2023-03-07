<template>
    <div>
        <TheHeader/>
        <TradeMain/>
        <br><br><br><br>   
        <FooterBar/>
    </div>
</template>

<script>
import TheHeader from './Header/TheHeader.vue' 
import TradeMain from './Content/TradeMain.vue'
import FooterBar from '@/components/footer/FooterBar.vue'

export default {
    name:'ChainTrade',
    components:{
        TheHeader,
        TradeMain,
        FooterBar
    }
}
</script>

<style scoped>

</style>