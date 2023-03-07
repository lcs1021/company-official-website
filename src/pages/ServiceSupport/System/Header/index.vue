<template>
    <div class="header">
        <span>服务体系</span>
        <button>立即了解</button>
    </div>
</template>

<script>

export default {
    name: 'TheHeader'
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 450px;
        background: url("@/../public/images/header3.png") no-repeat;
        background-size: 100% 100%;
    }
    .header span{
        font-size: 30px;
        color: rgb(0, 0, 0);
        position: relative;
        top:35%;
        left: 10%;
    }
    .header button{
        width: 100px;
        height: 50px;
        background: linear-gradient(90deg,#ff4949,#fb8888);
        border: none;
        border-radius: 10px;
        color: white;
        position: relative;
        top: 50%;
        left: 2%;
    }
    .header button:hover{
        box-shadow:0 0 20px 0 #ff0101;       
    }
</style>