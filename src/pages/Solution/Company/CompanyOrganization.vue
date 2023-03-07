<template>
    <div>
        <TheHeader/>
        <Firm/>
        <Advantage/>
        <Meeting/>
        <Introduce/>
        <Voip/>
        <Recomment/>
        <FooterBar v-show="CompanyFlag_5"/>
    </div>
</template>

<script>
import TheHeader from './Firm/Header/TheHeader.vue'
import Firm from './Content/Project/index.vue'
import Advantage from './Content/Advantage/index.vue'
import FooterBar from '@/components/footer/FooterBar.vue'
import Meeting from './Meeting/Content/Project/index.vue'
import Introduce from './Meeting/Content/Introduce/index.vue'
import Voip from './Voip/Project/index.vue'
import Recomment from './Voip/Content/index.vue'
import {CompanyAnimation} from '@/mixin'


export default {
    name:'CompanyOrganization',
    components:{
        TheHeader,
        Firm,
        Advantage,
        Meeting,
        Introduce,
        Voip,
        Recomment,
        FooterBar,
    },
    mixins:[CompanyAnimation]
}
</script>

<style scoped>
    body{
        /* background-color: rgb(239, 239, 239); */
        /* background-color: rgb(166, 41, 41); */
    }
</style>