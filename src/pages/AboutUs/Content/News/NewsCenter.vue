<template>
    <div>
        <transition enter-active-class="animate__animated animate__fadeInRight" appear>
            <div class="news" v-show="AboutFlag_2">
                <span style="font-size: 30px; color:blue ">新闻中心</span>
                <br><br>
                <div class="text">
                    <el-link :underline="false" style="font-size:20px;">
                        <span>关于召开第二次股东代表大会的通知</span> 
                        <i>2022-08-30</i>
                        <hr>
                        <p>
                            2022年8月29日，由中国信息通信研究院（下文简称“信通院”）、中国通信标准化协会主办的“云管和云网大会”于线上顺利召开。
                            本次大会聚焦云管、云网、混合云、专有云、云优化治理等领域，发布了一批最新的体系标准和认证评估结果。
                            活动现场，由信通院、安畅联合编写的《云管理服务赋能企业数字化转型白皮书》于大会主论坛重磅发布。
                            在企业数字化浪潮席卷全国的时代
                        </p>                        
                    </el-link>
                    <el-link :underline="false" style="font-size:20px;">
                        <span>关于召开第一次股东代表大会的通知</span> 
                        <i>2022-05-20</i>
                        <hr>
                        <p>
                            2022年5月19日，由中国信息通信研究院（下文简称“信通院”）、中国通信标准化协会主办的“云管和云网大会”于线上顺利召开。
                            本次大会聚焦云管、云网、混合云、专有云、云优化治理等领域，发布了一批最新的体系标准和认证评估结果。
                            活动现场，由信通院、安畅联合编写的《云管理服务赋能企业数字化转型白皮书》于大会主论坛重磅发布。
                            在企业数字化浪潮席卷全国的时代
                        </p>                        
                    </el-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {AboutAnimation} from "@/mixin"


export default {
    name: 'NewsCenter',
    mixins:[AboutAnimation],

}
</script>

<style scoped>
    .news{
        position: relative;
        left: 5%;      
        width: 80%;
        height: 100%;
        overflow: hidden;
        padding: 30px;
    }
    .text .el-link:hover{
        color: rgb(249, 11, 106);  /* 247,158,74  */ 
    }
    .text .el-link span{
        font-size:22px;
        font-weight:bolder;
    }
    .text .el-link i{
        float: right;
        font-style:normal;
        font-size:18px;
        font-weight:bolder;
        color: rgb(159, 164, 164);
    }
    /deep/.el-link.el-link--default{
        /* color: rgb(105, 140, 246); */
        color: rgb(98, 98, 98);
    }
    /deep/.text .el-link{
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .text p{
        color:rgb(107, 173, 180);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 15px;
        text-indent: 2em;
    }
</style>