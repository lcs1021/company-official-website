<template> 
<div class="advantage">
    <transition enter-active-class="animate__animated animate__fadeInRight" appear>   
        <div v-show="CompanyFlag_1">
                <p>方案价值</p>
                <div>
                    <ul>
                        <li>
                            <span class="el-icon-timer"></span>
                            <span>统一纳管，简单运维，实时检测，主动预测各分支机的网络异常情况。</span>
                        </li>
                        <li>
                            <span class="el-icon-help"></span>
                            <span>结合AI和智能策略，自动化运维网络。</span>
                        </li>
                        <li>
                            <span class="el-icon-refresh"></span>
                            <span>端到端的云化管理，弹性调整管理容量和投资。</span>
                        </li>
                        <li>
                            <span class="el-icon-paperclip"></span>
                            <span>开放API接口，企业可定制对接业务系统，APP或小程序等，主力业务扩张。</span>
                        </li>
                    </ul>
                </div>
        </div>
    </transition>
</div>
</template>

<script>
import {CompanyAnimation} from '@/mixin'

export default {
    name:'Advantage',
    mixins:[CompanyAnimation]

}
</script>

<style scoped>
    .advantage{
        min-height: 300px;
        margin-bottom: 100px;
    }
    .advantage p:nth-child(1){
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgb(43, 43, 43);
    }
    .advantage ul{
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        
    }
    .advantage ul li{       
        list-style-type: none;
        padding: 15px;
        margin-right: 45px;
        margin-bottom: 50px;
        margin-top: 30px;
        box-shadow:0 0 14px 0 hsl(0deg 0% 83% / 50%);
        border: 0.5px solid #ffe4e4;
        border-radius: 50px;
    }
    .advantage ul li span:nth-child(1){
        font-size: 40px;
        /* color: rgb(249, 102, 102); */
        color: #0127ff;
        padding: 10px;
    }
    .advantage ul li span:nth-child(2){
        position:relative;
        top: -7px;

    }
    .advantage ul li:hover{
        border-radius: 50px;
        color: #6bb2d5;
        box-shadow: 0 0 30px 0 #c3c8e0; 
        background-color: rgb(251, 252, 246);      
    }
    .advantage ul li span{
        position: relative;
        left: 35%;
    }
</style>