<template>
        <el-main>
            <div class="background">
                <el-button type="danger" round>立即了解</el-button>
            </div>
        </el-main>
</template>

<script>

export default {
    name: 'ProductHeader',
    
}
</script>

<style scoped>
    .el-main{
        width: 100%;
        height: 400px;
        background: url(@/assets/img/image1.jpg) no-repeat 100% 100%;
        background-size: 100% 100%;
    }
    .background{
        position: relative;
        top: 40%;
        left: 80%;
    }
    /deep/.el-card__body, .el-main{
        padding: 0px;
        margin: 0px;
    }
    /deep/.el-main{
        min-width: 1366px;
    }
    .el-main::-webkit-scrollbar { 
        /* 限制左右拉动*/
        height: 0 !important;   
        /* 隐藏X轴滚动条 */
        overflow-x: hidden;
    }
</style>