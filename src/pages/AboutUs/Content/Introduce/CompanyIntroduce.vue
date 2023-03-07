<template>
    <div>       
        <transition 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInLeft"
        >   
            <div v-show="aboutUs_Flag" class="companyIntroduction">
                <span style="font-size: 30px; color: blue; ">企业介绍</span> <br>                
                <div >
                    <p style="font-size: 27px;text-align:center;margin-top: 30px;color:blue">了解亿联</p>
                    <div class="introduce"> 
                        <p>
                            公司成立于2017年，主营业务贯穿企业IT系统生命周期的全过程，为企业提供一站式
                            的综合解决方案，是目前行业领先的专用网络服务提供商。
                        <!-- </p> -->
                        <!-- <p> -->
                            现拥有的全国跨地区增值电信经营许可证范围包括：专网通信、因特网虚拟专用网
                            (VPN)、系统集成(数通设备、网络安全设备、弱点工程)等。
                        </p>
                        <p>
                            致力于为跨区经营的大中型企业提供安全性更高、可控性更强的专有网络通信服务，
                            以及基于专网通信平台的信息化解决方案。
                        <!-- </p>
                        <p> -->
                            金牌经销商，专网通信平台；一站式通信科技综合解决方案与国内一流经营商长期
                            合作：中国电信、中国联通、中国移动、中国光电。
                        </p>
                        
                    </div> 
                    <br>
                    <div class="honour" style="text-align: center;">
                        <p style="font-size: 27px;text-align:center;margin-top: 30px;color:blue">荣誉奖项</p>
                        <ul>
                            <!-- 如果想要添加图片记得要去 src/mixin.js 修改滚轮滚动距离显示的像素值-->
                            <!-- <li><img src="../../../assets/img/image1.jpg" alt=""></li> -->
                            <!-- <li><img src="../../../assets/img/background.png" alt=""></li> -->
                            <!-- <li><img src="../../../assets/img/background.png" alt=""></li> -->
                        </ul>
                    </div>
                </div>           
            </div>
    </transition>
    </div>
</template>

<script>
import {alignTransition} from '@/mixin'

export default {
    name: 'CompanyIntroduce',
    mixins:[alignTransition]
}
</script>

<style scoped>
    .companyIntroduction{
        position: relative;
        left: 5%;      
        width: 80%;
        height: 100%;
        overflow: hidden;
        padding: 30px;
        margin-top: 30px;
    }
    .companyIntroduction .honour li{       
        float: left;
        margin-right: 50px;
        margin-left: 60px;
        margin-top: 50px;
    }
    .companyIntroduction .honour img{
        width: 450px;
        height: 400px;
    }
    li{
        list-style-type: none;
    }
    p{
        /* 216,216,216 */
        color: rgb(0, 0, 0);  
        text-indent: 2em;
    }
    /deep/.el-icon-s-opportunity{
        font-size: 30px;
        color: rgb(255, 255, 129);
    }
    .companyIntroduction .introduce p{
        /* position: relative;
        left: 4%;
        top: -50px; */
        margin-bottom: -10px;
        margin-left: 35px;
    }
</style>