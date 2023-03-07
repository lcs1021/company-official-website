<template>
    <div>
        <transition enter-active-class="animate__animated animate__fadeInRight" appear>
            <div v-show="aboutUs_Flag" class="contactWay">
                <span style="font-size: 30px; color:blue; ">联系方式</span> <br><br>
                <div style="position: relative;left: 3%;">
                    <div class="location">
                        <span>公司名称</span>  <br>
                        <i>深圳市</i> <br>
                        <i>亿联通信科技有限公司</i>
                    </div>
                    <div class="email">
                        <span>邮箱</span>  <br>
                        <i>yipchaiwa@ylcomm.cn</i>
                    </div>
                    <div class="phone">
                        <span>联系方式</span>  <br>
                        <i>13302995127</i>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {alignTransition} from "@/mixin"


export default {
    name: 'ContactWay',
    mixins:[alignTransition]

}
</script>

<style scoped>
    .contactWay{
        position: relative;
        left: 5%;
        width: 80%;
        height: 100%;
        overflow: hidden;
        padding: 30px;
        min-width: 1366px;
    }
    .location,.email,.phone{
        width: 320px;
        height: 200px;
        color: rgb(47, 47, 47);
        text-align: center;
        float: left;
    }
    .location:hover,.email:hover,.phone:hover{
        background-color: skyblue;
        color: rgb(255,255,255);  /* 79, 112, 211  */
    }
    .location span,.email span,.phone span{
        line-height: 100px; 
        font-size: 20px; 
        font-weight: bolder;
    }
    .location i,.email i,.phone i{
        font-size: 18px; 
    }
</style>