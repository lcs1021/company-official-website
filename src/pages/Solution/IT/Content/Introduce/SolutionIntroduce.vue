<template>
    <div>
        <transition enter-active-class="animate__animated animate__fadeInUp" appear>
            <div >           
                <div class="icon">
                    <li>
                        <i class="el-icon-document-copy"></i> 
                        <i class="el-icon-cloudy"></i>
                    </li>
                    <li>
                        <span>业务安全合规</span>              
                        <span>云平台自身安全合规</span>
                    </li>             
                </div> 
                <div class="programme">
                    <span>有什么解决方案</span>
                    <img src="@/../public/images/project1.jpg" alt="">
                </div>    
                <div class="header">
                    <span>组网解决方案</span>
                </div>
                <br><br><br><br><br>            
            </div>
        </transition>
    </div>
</template>

<script>
// import {alignTransition} from '@/mixin'

export default {
    name:'SolutionIntroduce',
    // mixins:[alignTransition],
}
</script>

<style scoped>
    .icon{
        position: relative;
        background-color: #fff;
        margin-top: 50px;
    }
    li{
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
    }
    .icon i{
        font-size: 40px;
        color: #F56C6C; 
    }
    .icon span{
        font-size: 15px;
        color: rgb(32, 32, 32);
        line-height: 80px;
    }
    .icon span:nth-child(1){
        margin-right: -40px;
    }
    .icon span:last-child{
        margin-right: -30px;
    }
     /* 解决方案介绍 */   
     .programme{
        text-align: center;
     }
    .programme span{
        display: block;
        font-weight: bold;
        font-size: 30px;
        color: rgb(52, 52, 52);
        /* position: relative; */
        /* left: 50%; */
        /* top: 680px; */
        /* transform:translateX(-50%); */
    }
    .programme img{
        width:1000px;
        margin-top: 20px;
    }
     /* 头部 */
     .header{
        position: relative;
    }
    .header span{
        font-size: 30px;
        color: rgb(52, 52, 52);
        font-weight: bold;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 45px;
    }
</style>