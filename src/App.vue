<template>
  <div>
    <HomePage/>
    <div class="btn">
        <!-- 返回顶部 -->
        <!-- 消失动画： leave-active-class="animate__animated animate__bounceOut" -->
        <transition enter-active-class="animate__animated animate__rubberBand" appear>  
            <button 
                v-show="TopFlag" 
                class="btnTop el-icon-upload2"
                @click="goBack" 
                @mouseenter="MouseEnterTop" 
                @mouseleave="MouseLeaveTop"
            >
                <i v-show="flagTop">返回顶部</i>
            </button>
        </transition>
        <button v-show="$route.meta.PageName" class="el-icon-phone btnCall" @mouseenter="MouseEnterPhone" @mouseleave="MouseLeavePhone">
            <i v-show="flagPhone">13302995127</i>
        </button>
    </div>
  </div>
</template>

<script>
import HomePage from '@/components/home/HomePage.vue';
import {AboutAnimation,TopAnimation} from "@/mixin.js"
import 'vue-baidu-map'

export default {
  name: "App",
  components: {
    HomePage,
  },
  data(){
        return {
            flagPhone: false,
            flagTop: false
        }
    },
    mixins:[AboutAnimation,TopAnimation],
    methods:{
        goBack() {
            document.documentElement.scrollTop = 0;            
        },
        MouseEnterPhone(){
            this.flagPhone = true
            this.flagTop = false
        },
        MouseLeavePhone(){
            this.flagPhone = false
        },
        MouseEnterTop(){
            this.flagTop = true
            this.flagPhone = false
        },
        MouseLeaveTop(){
            this.flagTop = false
        }

    },   
  
}
</script>

<style scoped>
  .btnCall{
        width: 60px;
        height: 60px;
        position: fixed;
        left: 96%;
        top: 300px;
        z-index: 10000;
        text-align: center;
        line-height: 60px;
    }
    .btnTop{
        width: 60px;
        height: 60px;
        position: fixed;
        left: 96%;
        top: 370px;
        z-index: 10000;
        text-align: center;
        line-height: 60px;

    }   
    /deep/.el-icon-phone,.el-icon-upload2{
        font-size: 25px;
        color: rgb(96, 96, 96);
    }
    button{
        background-color: rgb(231, 231, 231);
        /* border-color: aliceblue; */
        border: none;
        border-radius: 10px;
        /* background-color: rgb(193, 193, 193); */
    }
    button:hover{
        background-color: rgb(112, 212, 255);
        transform: translateX(-90px);
        transition: 300ms linear;
        width: 150px;
        text-align: left;
        padding-left: 5px;
        font-size: 25px;
        min-width: 1366px;       
    }
    /deep/.el-icon-phone:hover,.el-icon-upload2:hover{
        color: white;
    }
    .btnCall i,.btnTop i{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        padding-left: 5px;
        color: white;
    }
    .btnTop i{
        padding-left: 15px;
        font-size: 20px;
        font-style:normal;
    }
</style>