<template>
    <div class="voip">
        <transition enter-active-class="animate__animated animate__fadeInLeft">      
            <div v-show="CompanyFlag_4">
                <p>VOIP解决方案</p>
                <span>提供基于组网的IP语音通信，有助于协同沟通</span>
                <div class="image">
                    <img src="@/../public/images/voip.png" alt="">
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import {CompanyAnimation} from '@/mixin'


export default {
    name: 'Voip',
    mixins:[CompanyAnimation]
}
</script>

<style scoped>
    .voip{
        text-align: center;
    }
    .voip p{
        font-size: 35px;
        color: rgb(43, 43, 43);
        font-weight: bold;
    }
    .image{
        padding-top: 50px;
        margin-top: 20px;
        margin-bottom: 50px;
        background-color: #fff;
    }
    .image img{
        margin-bottom: 50px;
    }
</style>