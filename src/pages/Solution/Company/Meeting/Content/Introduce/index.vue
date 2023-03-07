<template>
    <transition enter-active-class="animate__animated animate__fadeInRight" appear>    
        <div v-show="CompanyFlag_3">
            <p>一键开启云视频会议</p>
            <ul class="introduce">
                <li>
                    <div class="el-icon-thumb"></div>
                    <p>一键互连互通</p>
                </li>
                <li>
                    <div class="el-icon-folder-checked"></div>
                    <p>适用于不用会议室环境的视频会议终端产品</p>
                </li>
                <li>
                    <div class="el-icon-attract"></div>
                    <p>灵活充分应用组网带宽</p>
                </li>
                <li>
                    <div class="el-icon-connection"></div>
                    <p>
                        为客户提供云+智能终端服务，高品质视讯终端
                        &移动APP，PC软端等
                    </p>
                </li>
                <li>
                    <div class="el-icon-coin"></div>
                    <p>高清稳定海量并发</p>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
import {CompanyAnimation} from '@/mixin'


export default {
    name: 'Introduce',
    mixins:[CompanyAnimation]
}
</script>

<style scoped>
    .introduce{
        min-height: 180px;
        background-color: #fff;
        
    }
    p:nth-child(1){
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgb(43, 43, 43);
    }
    ul{
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 30px;
        margin-bottom: 100px;
    }
    .introduce li{
        width: 150px;
        /* height: 180px; */
        list-style-type: none;
        margin-right: 100px;
        border-radius: 20px;
        padding: 10px;
        margin-bottom: 40px;
        background-color: rgb(244, 244, 244);
        
    }
    .introduce li div{
        padding-top: 20px;
        font-size: 35px;
        color: #0127ff;
    }
    .introduce li:last-child{
        margin-right: 50px;
    }
    .introduce li:hover{
        background-color: rgb(229, 233, 255);
        box-shadow:0 0 14px 0 rgba(0, 0, 0, 0.5);
        color: rgb(80, 65, 253);
        
    }
    
</style>