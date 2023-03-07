<template>
    <div>
        <transition enter-active-class="animate__animated animate__backInDown" appear>       
            <div class="service">
                <p>服务供应商</p> 
                <ul>
                    <li>
                        <img src="@/../public/images/ISP1.png" alt="">
                        <p>中国电信</p>
                    </li>
                    <li>
                        <img src="@/../public/images/ISP2.png" alt="">
                        <p>中国移动</p>
                    </li>
                    <li>
                        <img src="@/../public/images/ISP3.png" alt="">
                        <p>中国联通</p>
                    </li>
                    <li>
                        <img src="@/../public/images/ISP4.png" alt="">
                        <p>中国光电</p>
                    </li>
                    <li>
                        <img src="@/../public/images/ISP5.png" alt="">
                        <p>鹏博士</p>
                    </li>
                    <li>
                        <img src="@/../public/images/ISP6.png" alt="">
                        <p>润迅数据</p>
                    </li>
                    <li>
                        <img src="@/../public/images/ISP7.png" alt="">
                        <p>万国数据</p>
                    </li>
                </ul>                

            </div>
        </transition>

    </div>
</template>

<script>

export default {
    name: 'ConcentrationService',
}
</script>

<style scoped> 
    li{
        list-style-type: none;
    }
    img{
        width: 100px;
        height: 80px;
    }
    .service{
        margin-left: 10%;
        width: 80%;
        text-align: center;
    }
    .service p:nth-child(1){
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        margin-top: 50px;
    }
    .service ul{
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    .service ul li{
        margin-right: 80px;
    }
    .service ul li:nth-child(1){
        margin-left: 50px;
    }
    .service ul li p{
        font-size: 25px;
    }
</style>
