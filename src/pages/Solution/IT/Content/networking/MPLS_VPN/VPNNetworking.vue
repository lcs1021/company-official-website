<template>
    <transition enter-active-class="animate__animated animate__slideInLeft" appear>
        <div  class="vpn" >           
            <div class="vpnImg">
                <img src="@/../public/images/VPN.png" width="500px" height="400px">
            </div>
            <div class="explain">
                <span style="font-size:50px;color: white;">···</span> 
                <p style="margin-top: -8px;border-top: 1px solid #4d5770;padding-left: 5px;padding-top: 5px;">
                    提供高品质的MPLS VPN产品，
                    按客户需求定制双机双网解决方案。
                </p>
                <span>部署概述</span>
                <P>
                    主线设备使用MSTP专线接入光联MPLI VPN； <br>
                    备线设备利用本地Internet搭建IPSEC VPN接入光联备网； <br>
                    使用BGP community特性，实现智能双击双网的mpls vpn组网解决方案。
                </P>
                <span>方案优势</span>
                <p>
                    稳定、安全性高、网络无间断、节约成本、方案灵活性高。
                </p>
            </div>
        
        </div>
    </transition>
</template>

<script>

export default {
    name:'VPNNetworking',
   
}
</script>

<style scoped>
    .vpn{
        margin-top: 30px;
        position: relative;
        /* transform: translateX(-38%); */

        left: 15%;
        overflow: hidden;
    }
    .vpnImg{
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
    .vpn .explain span{
        padding-left: 5px;
        font-weight: bolder;
        font-size: 20px;
        color: rgb(227, 227, 227);
    }
    .vpn .explain p{
        padding-left: 5px;
        line-height: 30px;
        color: rgb(227, 227, 227);
    }
</style>