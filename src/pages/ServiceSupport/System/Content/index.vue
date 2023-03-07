<template>
    <div>
        <p>产品体系</p>
        <ul>
            <li>
                <img src="@/../public/images/product1.png" alt="">
            </li>
            <li>
                <img src="@/../public/images/product2.png" alt="">
            </li>
            <li>
                <img src="@/../public/images/product3.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'Product'
}
</script>

<style scoped>
    li{
        list-style-type: none;
    }
    img{
        width: 1200px;
    }
    ul{
        text-align: center;
    }
    ul li{
        margin-bottom: 50px;
    }
    ul li:nth-child(1){
        margin-top: 30px;
    }
    p{
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
</style>