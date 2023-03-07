<template>
    <div class="meeting">
        <transition enter-active-class="animate__animated animate__fadeInLeft" appear>       
            <div v-show="CompanyFlag_2">
                <p>云视频会议解决方案</p>
                <span>提供一体化、多层次视频会议，提升企业运作效率</span>
                <div class="image">
                    <img src="@/../public/images/meeting.png" alt="">
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {CompanyAnimation} from '@/mixin'

export default {
    name: 'Meeting',
    mixins:[CompanyAnimation]
}   
</script>

<style scoped>
    .meeting{
        text-align: center;
    }
    .meeting p{
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