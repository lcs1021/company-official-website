<template>
    <div class="introduce">
        <p>智能DNS服务助力企业扩展市场</p>
        <ul>
            <li>
                <div class="el-icon-finished"></div>
                <p>构建高速稳定的Email访问隧道</p>
            </li>
            <li>
                <div class="el-icon-folder-checked"></div>
                <p>解决国内国际邮件丢失的问题</p>
            </li>
            <li>
                <div class="el-icon-collection"></div>
                <p>为客户提供高品质的Email邮件服务</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'Introduce'
}
</script>

<style scoped>
    .introduce{
        margin-top: 80px;
    }
    li{
        list-style-type: none;
    }
    .introduce p:nth-child(1){
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: rgb(52, 52, 52);
    }
    .introduce ul{
        display: flex;
        justify-content: center;
        padding: 20px;
        background-color: rgb(56,59,76);
        padding-top: 5%;
    }
    .introduce ul div{  
        width: 120px;
        height: 30px;     
        font-size: 45px;
        color: rgb(255, 123, 125);
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .introduce ul li{
        text-align: center;
        width: 120px;
        margin-bottom: 100px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 10px;
    }
    .introduce ul li p{
        color: rgb(255, 255, 255);
    }
    .introduce ul li:nth-child(1){
        position: relative;
        left: -10%;
    }
    .introduce ul li:nth-child(3){
        position: relative;
        left: 10%;
    }
    .introduce ul li:hover{
        background-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-30px);
        transition: 0.4s linear;
    }
</style>