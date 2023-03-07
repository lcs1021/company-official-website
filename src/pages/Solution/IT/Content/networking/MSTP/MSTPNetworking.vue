<template>
    <transition enter-active-class="animate__animated animate__fadeInUp" appear>
        <div  class="mstp">
            <div class="mstpImg">
                <img src="@/../public/images/MSTP.png" width="500px" height="400px">
            </div>
            <div class="explain">
                <span style="font-size:50px;color: white;">···</span> 
                <p style="margin-top: -8px;border-top: 1px solid #4d5770;padding-left: 5px;padding-top: 5px;">
                    定制化自建组网解决方案，
                    双网双机保障业务不中断。
                </p>
                <span>部署概述</span>
                <P>
                    总部/分公司主线使用点到点MSTP专线，备份利用本地Internet自建lpsec VPN； <br>
                    当其中一条上网线路或者设备故障，VPN流量自动切换；<br>
                    该方案接入后，可利用光联监控平台，查看当前流量图及线路状态。
                </P>
                <span>方案优势</span>
                <p>
                    成本低、安全性高、快速部署、网络无间断。
                </p>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
    name:'MSTPNetworking',
}
</script>

<style scoped>
    .mstp{
        margin-top: 30px;
        position: relative;
        left: 15%;
        /* transform: translateX(-38%); */
        overflow: hidden;
    }
    .mstpImg{
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
    .mstp .explain span{
        padding-left: 5px;
        font-weight: bolder;
        font-size: 20px;
        color: rgb(227, 227, 227);
    }
    .mstp .explain p{
        padding-left: 5px;
        line-height: 30px;
        color: rgb(227, 227, 227);
    }
</style>