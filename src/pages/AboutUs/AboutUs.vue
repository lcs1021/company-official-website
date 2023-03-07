<template>
    <div> 
        
        <!-- 正文 -->
        <AboutUsMain/>
        <!-- 尾部 -->
        <FooterBar v-show="AboutFlag_4"/>
         
    </div>
</template>

<script>
import AboutUsMain from '@/pages/AboutUs/Content/AboutUsMain.vue'
import FooterBar from '@/components/footer/FooterBar.vue'
import {AboutAnimation} from '@/mixin'


export default {
    name: 'AboutUs',
    components:{
        AboutUsMain,
        FooterBar
    },
    mixins:[AboutAnimation]
}

</script>

<style scoped>
    
</style>
