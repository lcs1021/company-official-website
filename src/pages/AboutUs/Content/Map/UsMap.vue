<template>
    <div>
        <transition enter-active-class="animate__animated animate__fadeInLeft" appear>
            <div class="map" v-show="AboutFlag_3">
                <span style="font-size: 30px; color: blue; ">我们的位置</span> <br><br>
                <span class="el-icon-map-location" style="font-size:45px;margin-left: 40px;color:black"></span>
                <i style="font-size:18px;margin-left: 10px;font-style: normal;">深圳市南山区科技园高新北一道18号酷派大夏C座6层</i>  
                <!-- <TheMap/>  -->
                <br><br><br>
                <baidu-map  bm-view="none" :center="{lng:113.948924,lat:22.567614}" :zoom="19" style="height:400px;width: 1000px;margin: auto;border: 1px solid rgb(171, 171, 171);"></baidu-map>
                <!-- 113.951486,22.56639  113.950878,22.56683 -->

                
            </div>
        </transition>
    </div>
</template>

<script>
import {AboutAnimation} from "@/mixin"
// import TheMap from './TheMap.vue'

export default {
    name: 'UsMap',
    mixins:[AboutAnimation],
    // components:{TheMap}
}
</script>

<style scoped>
    .map{
        position: relative;
        left: 5%;      
        width: 80%;
        height: 100%;
        overflow: hidden;
        padding: 30px;
        /* color: rgb(47, 80, 177); */
        color: rgb(98, 98, 98);
        margin-bottom: 30px;
    }
    .map i:hover{
        /* color: rgb(9, 68, 248); */
        color: black;
    }
    
    /* .map span:hover{
        color: aquamarine;
    } */
</style>