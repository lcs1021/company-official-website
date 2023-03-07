<template>
    <el-main>
        <div class="navigation">
            <ul>
                <li>
                    <router-link replace to="/productresources/concentrationservice" >                        
                        <div class="hue" :class="serviceObj">专线服务（ISP）</div>
                    </router-link>
                </li>
                <li>
                    <router-link replace to="/productresources/systemextend" >
                        <div class="hue" :class="systemObj">系统集成（ICT）</div>
                    </router-link>
                </li>
            </ul>

        </div>
        
        <router-view></router-view>

    </el-main>
</template>

<script>

export default {
    name: 'ProductNavigation',
    data(){
        return {
            serviceObj:{
                service: false
            },
            systemObj:{
                system: false
            }
        }
    },
    watch:{
        $route(to){
            if(to.path === '/productresources/concentrationservice'){
                this.serviceObj.service = true
                this.systemObj.system = false
            }
            else if(to.path === '/productresources/systemextend'){
                this.systemObj.system = true
                this.serviceObj.service = false
            }
        }
    },
    mounted(){
        if(this.$route.path === '/productresources/concentrationservice'){
                this.serviceObj.service = true
                this.systemObj.system = false
            }
            else if(this.$route.path === '/productresources/systemextend'){
                this.systemObj.system = true
                this.serviceObj.service = false
            }
    }
}
</script>

<style scoped>
    .el-main{
        background-color: #fff;
        height: 600px;
    }
    .navigation{
        width: 80%;
        height: 80px;
        margin-left: 10%;
        margin-right: 10%;
        background-color: rgb(0, 54, 92);
        margin-top: 20px;
        border-radius: 50px;
    }
    .navigation ul{
        display: flex;
        justify-content: center;
        position: relative;
        top: 50%;
        transform: translateY(-60%);
    }
    .navigation ul li{
        list-style-type: none;
        margin-top: 15px;
        color: rgb(121, 121, 121);
        font-size: 20px;
    }
    .hue{
        color: #ffffff;
    }
    .navigation ul li div:hover{
        color: rgb(51, 255, 255);
    }   
    a{
        text-decoration: none;
    }
    .navigation ul li:nth-child(1){
        position: relative;
        left: -10%;
    }
    .navigation ul li:nth-child(2){
        position: relative;
        left: 8%;
    }
    /deep/.el-card__body, .el-main{
        padding: 0px;
        margin: 0px;
    }
    /deep/.el-main{
        min-width: 1366px;
    }
    .el-main::-webkit-scrollbar { 
        height: 0 !important;   
        overflow-x: hidden;
    }
    .service{
        color: rgb(51, 255, 255)!important;
    }
    .system{
        color: rgb(51, 255, 255)!important;
    }
</style>