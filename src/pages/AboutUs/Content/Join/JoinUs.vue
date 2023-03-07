<template>
    <div>
        <transition enter-active-class="animate__animated animate__fadeInRight" appear>
            <div class="joinUs" v-show="AboutFlag_1">
                <span style="font-size: 30px; color: blue; ">加入我们</span> <br><br>
                <div class="person">
                    <span class="el-icon-s-custom" style="font-size: 45px;margin-left: 40px;position: relative;top: 10px;"></span>
                    <el-link type="primary" style="font-size:20px;margin-left:10px;">诚招聘各种人才，欢迎投递简历</el-link>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {AboutAnimation} from "@/mixin"

export default {
    name: 'JoinUs',
    mixins:[AboutAnimation],
}
</script>

<style scoped>
    .joinUs{
        position: relative;
        left: 5%;      
        width: 80%;
        height: 100%;
        overflow: hidden;
        padding: 30px;
    }
    /deep/ .el-icon-s-custom{
        color: rgb(214, 224, 253);
    }
    /* .joinUs .person span:hover{
        color: rgb(149, 233, 252);
        
    } */
    .joinUs .person span{
        color: black;
    
    }

</style>