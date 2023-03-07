<template> 
    <transition enter-active-class="animate__animated animate__fadeInRight">   
        <div class="advantage" v-show="TradeFlag_1">
            <p>方案价值</p>
            <div>
                <ul>
                    <li>
                        <span class="el-icon-timer"></span>
                        <p>统一纳管，简单运维，实时检测，主动故障诊断，7x24消失实时掌握网络情况。</p>
                    </li>
                    <li>
                        <span class="el-icon-first-aid-kit"></span>
                        <p>安全管理规范，业务不间断运行并具备迅速恢复的能力。</p>
                    </li>
                    <li>
                        <span class="el-icon-money"></span>
                        <p>降低投入成本。</p>
                    </li>
                    <li>
                        <span class="el-icon-medal"></span>
                        <p>开放API接口，基于云平台构建零售生态系统，提供VIP级客户体验。</p>
                    </li>
                    <li>
                        <span class="el-icon-connection"></span>
                        <p>通过IOT技术实现多网合一。</p>
                    </li>
                    <li>
                        <span class="el-icon-unlock"></span>
                        <p>合规：无线非经资质。</p>
                    </li>
                </ul>
            </div>
        </div>
    </transition>

</template>

<script>
import {TradeAnimation} from '@/mixin'

export default {
    name:'Advantage',
    mixins:[TradeAnimation]

}
</script>

<style scoped>
    .advantage{
        padding: 10px;
        min-height: 300px;
        text-align: center;
        background-color: #fff;
    }
    .advantage p:nth-child(1){
        /* margin-top: 100px; */
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        color: rgb(43, 43, 43);
    }
    .advantage ul{
        display: flex;
    }
    .advantage ul li{       
        width: 200px;
        list-style-type: none;
        padding: 15px;
        margin-right: 45px;
        margin-bottom: 50px;
        margin-top: 30px;
        box-shadow:0 0 14px 0 hsl(0deg 0% 83% / 50%);
        justify-content: space-around;
    }
    .advantage ul li span{
        font-size: 40px;
        color: rgb(102, 119, 249);
        padding: 10px;
    }
    .advantage ul li:hover{
        color: #626ca7;
        border-radius: 5px;
        box-shadow: 0 0 30px 0 rgb(167, 209, 254);       
    }
</style>