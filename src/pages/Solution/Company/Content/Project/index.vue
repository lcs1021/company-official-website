<template>
    <div class="trade">
        <transition  enter-active-class="animate__animated animate__fadeInLeft" appear>       
            <div>
                <p>企业网云管理解决方案</p>
                <span>企业云化管理，大幅降低CAPEX和OPEX</span> 
                <div class="image">
                    <img src="@/../public/images/company2.png" alt="">
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name:'Firm',
}
</script>

<style scoped>
    .trade{
        padding: 10px;
        text-align: center;
        margin-top: 30px;
    }
    .trade p{
        font-size: 35px;
        color: rgb(43, 43, 43);
        font-weight: bold;
    }
    .trade .image{
        padding-top: 50px;
        margin-bottom: 50px;
        background-color: #fff;
    }
    .trade span{
        display: block;
        margin-bottom: 20px;
    }
</style>