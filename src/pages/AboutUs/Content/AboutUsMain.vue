<template>
        <el-main class="background">
            <div class="backImg">
                <CompanyIntroduce/>
                <contactWay/>
                <JoinUs/>
                <NewsCenter/>
                <UsMap/> 
            </div>   
        </el-main>           
</template>

<script>
 import CompanyIntroduce from './Introduce/CompanyIntroduce.vue'
 import ContactWay from './Phone/ContactWay.vue'
 import JoinUs from './Join/JoinUs.vue'
 import NewsCenter from './News/NewsCenter.vue'
 import UsMap from './Map/UsMap.vue'

export default {
    name: 'AboutUsMain',
    components:{ 
        CompanyIntroduce, 
        ContactWay, 
        JoinUs, 
        UsMap, 
        NewsCenter, 
    },
}
</script>

<style scoped>
    .background{
        height: 100%;
        width: 100%;
        background: url(../../../assets/img/background.png)no-repeat;
        background-size:100% 100%;            
        background-attachment: fixed;  /* 太有用了 */
        padding: 0;
        min-width: 1366px;
    }
    .backImg{
        padding: 0;
        margin-left: 10%;
        width: 80%;
        background-color: rgb(255, 255, 255,0.8);
    }
    /deep/ .el-main{
        color: #333;
        min-width: 1366px;
    }
    p{
        text-indent: 2em;
    }
    .el-main::-webkit-scrollbar{  
        height: 0 !important;   
        overflow-x: hidden;
    }
</style>