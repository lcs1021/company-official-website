<template>
    <div class="header">
        <span>连锁商贸解决方案</span> 
        <p>连锁商贸改变生活，使用连锁商贸便捷，我们有很多的成熟的解决方案</p>
        <el-button type="danger">立刻咨询</el-button>      
    </div>
</template>

<script>

export default {
    name:'TheHeader'
}
</script>

<style scoped>
    /* 头部 */
    .header{
        width: 100%;
        height: 400px;
        background: url(@/../public/images/trade.png)no-repeat;
        background-size:100% 100%;            
        /* background-attachment: relative;   */
        position: relative;
        padding: 0;
        min-width: 1366px;
    }
    .header span{
        font-size: 25px;
        color: white;
        margin-left: 10%;
        line-height: 300px;
    }
    .header p{
        position: absolute;
        top: 40%;
        left: 10%;
        color: rgb(255, 255, 255);
        padding-right: 1100px;
        line-height: 25px;
    }
    .header .el-button{
        position: absolute;
        top: 65%;
        left: 10%;
    }
    .header .el-button:hover{
        background-color: #F56C6C;
        box-shadow:0 0 20px 0 #ff0101;
    }
   
</style>