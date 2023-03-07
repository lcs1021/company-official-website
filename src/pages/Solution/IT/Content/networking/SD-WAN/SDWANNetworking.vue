<template>
    <transition enter-active-class="animate__animated animate__fadeInRight" appear>
        <div  class="wan">
            <div class="wanImg">
                <img src="@/../public/images/WAN.png" width="500px" height="400px">
            </div>
            <div class="explain">
                <span style="font-size:50px;color: white;">···</span> 
                <p style="margin-top: -8px;border-top: 1px solid #4d5770;padding-left: 5px;padding-top: 5px;">
                    亿联携手华为业内推出首个 “双网双用” 高速SD-WAN整体服务方案。
                </p>
                <span>部署概述</span>
                <P>
                    客户各点通过SD-WAN CPE设备和我司云网上的SD-WAN控制器互联，把MPLS和Internet VPN进行整合，
                    公有云站点通过云专线接入光联骨干。
                </P>
                <span>方案优势</span>
                <p>
                    稳定、安全性高、网络无间断、节约成本、方案灵活性高、智能选路和动态QOS、控制器统一管理、部署简单。
                </p>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
name:'SDWANNetworking'
}
</script>

<style scoped>
    .wan{
        margin-top: 30px;
        position: relative;
        left: 15%;
        /* transform: translateX(-38%); */
        overflow: hidden;
    }
    .wanImg{
        float: left;
        margin-right: 50px;
    }
    .explain{
        width: 500px;
        height: 400px;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 30px;
        /* background-color: rgb(231, 232, 255); */
        background: linear-gradient(#ff7272,#95495a,#6d4c6f,#404256);
    }
    .wan .explain span{
        padding-left: 5px;
        font-weight: bolder;
        font-size: 20px;
        color: rgb(227, 227, 227);
    }
    .wan .explain p{
        padding-left: 5px;
        line-height: 30px;
        color: rgb(227, 227, 227);
    }
</style>