<template>
    <div class="trade">
        <transition  enter-active-class="animate__animated animate__fadeInUp" appear>
        
            <div>
                <p>连锁门店光联网络云化管理解决方案</p>
                <span>智能门店高效智能管理，业务快速创新和发展</span> 
                <img src="@/../public/images/trade1.png" alt="">
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name:'Project',
}
</script>

<style scoped>
    .trade{
        padding: 10px;
        text-align: center;
        background-color: #fff;
    }
    .trade p{
        font-size: 25px;
        color: rgb(43, 43, 43);
        font-weight: bold;
    }
    .trade img{
        margin-bottom: 50px;
    }
    .trade span{
        display: block;
        margin-bottom: 50px;
    }
</style>