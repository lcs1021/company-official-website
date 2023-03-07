<template>
    <transition enter-active-class="animate__animated animate__fadeInRight"> 
        <div v-show="CompanyFlag_5">
            <p>VOIP服务主力企业办公</p>
            <ul class="recomment">
                <li>
                    <div class="el-icon-warning-outline"></div>
                    <p>充分利用光联云网组网资源和运维支持能力</p>
                </li>
                <li>
                    <div class="el-icon-circle-check"></div>
                    <p>为客户提供高品质的IP语音质量</p>
                </li>
                <li>
                    <div class="el-icon-remove-outline"></div>
                    <p>降低通话成本，图形化简易管理</p>
                </li>
                <li>
                    <div class="el-icon-circle-plus-outline"></div>
                    <p>多方电话会议室</p>
                </li>
            </ul>
        </div>
    </transition>

</template>

<script>
import {CompanyAnimation} from '@/mixin'

export default {
    name:'Recomment',
    mixins:[CompanyAnimation]

}
</script>

<style scoped>
    li{
        list-style-type: none;
    }
    p:nth-child(1){
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgb(43, 43, 43);
    }
    .recomment{
        background-color: #fff;
    }
    ul{
        display: flex;
        justify-content: center;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 30px;
        margin-bottom: 100px;
    }
    .recomment li{
        width: 150px;
        list-style-type: none;
        margin-right: 100px;
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 40px;   
    }
    .recomment li div{
        padding-top: 20px;
        font-size: 35px;
        color: #0127ff;
    }
    .recomment li:last-child{
        margin-right: 50px;
    }
    .recomment li:hover{
        background-color: rgb(242, 248, 255);
        box-shadow:0 0 14px 0 rgba(107, 107, 107, 0.5);
        color: rgb(80, 65, 253);
        transform: translateY(-30px);
        transition: 0.4s linear;
    }
</style>