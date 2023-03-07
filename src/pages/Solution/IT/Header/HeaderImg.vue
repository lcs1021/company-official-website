<template>
    
        <div class="header">
            <transition enter-active-class="animate__animated animate__slideInLeft" appear>
                <div v-show="it_flag">
                    <span>IT科技解决方案</span> 
                    <p>IT科技改变生活，使用IT生活便捷， <br>
                        我们有很多的成熟的解决方案
                    </p>
                    <el-button type="danger">立刻咨询</el-button>
                </div>
            </transition>      
        </div>
    
</template>

<script>
import {alignTransition} from "@/mixin"

export default {
    name:'HeaderImg',
    mixins:[alignTransition]
}
</script>

<style scoped>
    /* 头部 */
    .header{
        width: 100%;
        height: 400px;
        background: url(@/../public/images/networking2.png)no-repeat 100% 100%;
        background-size:100% 100%;            
        /* background-attachment: relative;   */
        padding: 0;
        min-width: 1366px;
    }
    .header span{
        font-size: 25px;
        color: white;
        margin-left: 10%;
        line-height: 300px;
    }
    .header p{
        position: relative;
        top: -120px;
        left: 10%;
        line-height: 25px;
        color: rgb(255, 255, 255);
        padding-right: 1100px;
        
    }
    .header .el-button{
        position: relative;
        top: -100px;
        left: 10%;
    }
    .header .el-button:hover{
        background-color: #F56C6C;
        box-shadow:0 0 20px 0 #ff0101;
    }
   
</style>