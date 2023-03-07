<template>
    <div class="background">
        <HeaderImg/>
        <SolutionIntroduce/>      
        <networking/>  
        <Email/>
        <Introduce/>
        <br><br><br>
        <FooterBar v-show="AnimateFlag_2"/>        
    </div>
</template>

<script>
import HeaderImg from './Header/HeaderImg.vue'
import SolutionIntroduce from './Content/Introduce/SolutionIntroduce.vue'
import networking from './Content/networking/networking.vue'
import Email from './Content/Email/Project/index.vue'
import Introduce from './Content/Email/Introduce/index.vue'
import FooterBar from '@/components/footer/FooterBar.vue'
import { ItAnimation } from '@/mixin'


export default {
    name:'ItScience',
    components:{
        HeaderImg,
        SolutionIntroduce,
        networking,
        Email,
        Introduce,
        FooterBar
    },
    mixins:[ItAnimation]
}
</script>

<style scoped>
    .background{
        background-color: #fff;
        padding: 0;
    }
</style>