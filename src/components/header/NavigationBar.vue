<template>
    <div>
        <!-- 头部 -->
        <el-header >
            <div class="header">
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/img/logo.png" alt="" width="120px;" height="50px">
                    </router-link>
                </div>
                <div class="navigation">
                    <ul>
                        <li class="product">
                            <el-dropdown  placement="top">
                                <div class="hue" :class="active1" style="font-size: 20px;">产品资源</div>
                                <el-dropdown-menu slot="dropdown">
                                    <router-link to="/productresources/concentrationservice" active-class="active">
                                    <el-dropdown-item class="el-icon-phone-outline"> 专线服务（ISP）</el-dropdown-item>
                                    </router-link>
                                    <router-link to="/productresources/systemextend" active-class="active">
                                    <el-dropdown-item class="el-icon-user"> 系统集成（ICT）</el-dropdown-item>
                                    </router-link>
                                </el-dropdown-menu>                               
                            </el-dropdown>
                        </li>
                        <li>
                            <el-dropdown  placement="top">
                                <div class="hue" style="font-size: 20px;">解决方案</div>
                                <el-dropdown-menu slot="dropdown" >
                                    <div class="dropdown" style="width:500px;height:100px">
                                        <li>
                                            <router-link to="#">
                                                <span class="el-icon-setting" style="margin-left: 35px;margin-right: 45px;"> 制造业</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span class="el-icon-notebook-2"> 金融保险</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name:'chaintrade'}">
                                                <span class="el-icon-sell"> 连锁商贸</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span class="el-icon-office-building"> 房地产</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span class="el-icon-school" style="margin-left: 35px;margin-right: 30px;"> 医疗医药</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/solutionproject/itscience">
                                                <span class="el-icon-monitor" style="margin-right: 47px"> IT科技</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="#">
                                                <span class="el-icon-document-copy"> 教育培训</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{name:'companyorganization'}">
                                                <span class="el-icon-suitcase-1"> 政企机构</span>
                                            </router-link>
                                        </li>
                                    </div>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>                            
                            <div class="el-dropdown-link hue" style="font-size: 20px;">客户案例</div>
                        </li>
                        <li>
                            <el-dropdown  placement="top" hide-timeout="400" >
                                <div class="hue" style="font-size: 20px;" >服务支持</div>
                                <el-dropdown-menu slot="dropdown">
                                    <router-link to="/servicesystem">
                                        <el-dropdown-item  class="el-icon-edit-outline"> 服务体系</el-dropdown-item>
                                    </router-link>
                                    <router-link to="">
                                        <el-dropdown-item class="el-icon-download"> 资料下载</el-dropdown-item>
                                    </router-link>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li>                           
                            <router-link to="/aboutus" style="font-size:20px">
                                <div class="hue" :class="active5">关于我们</div>                               
                            </router-link>                          
                        </li>   
                        <!-- <li>
                            <el-dropdown placement="top">
                                <i class="el-icon-user"></i>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="el-icon-thumb"> 登录</el-dropdown-item>
                                    <el-dropdown-item class="el-icon-discount"> 注册</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>                    -->
                    </ul>
                </div>
            </div>
        </el-header>
    </div>
</template>

<script>

export default{
    name: 'NavigationBar',
    data(){
        return {
            active1:{
                isActive1: false,
            },
            active5:{
                isActive5: false,
            },
            
        }
    },
    watch:{
        $route(to){
            
            if(to.path === '/productresources/concentrationservice' || to.path === '/productresources/systemextend'){
                this.active1.isActive1 = true
                this.active5.isActive5 = false
            }
            else if(to.path === '/aboutus'){
                this.active5.isActive5 = true
                this.active1.isActive1 = false
            }
            else if(to.path === '/' || to.path != '/aboutus' || to.path != '/productresources/concentrationservice' || to.path != '/productresources/systemextend'){
                this.active1.isActive1 = false
                this.active5.isActive5 = false
            }
        }
    },
    mounted(){        
        if(this.$route.path === '/productresources/concentrationservice' || this.$route.path === '/productresources/systemextend'){
            this.active1.isActive1 = true
            this.active5.isActive5 = false

        }
        else if(this.$route.path === '/aboutus'){
            this.active5.isActive5 = true
            this.active1.isActive1 = false
        }
        else if(this.$route.path === '/'){
            this.active1.isActive1 = false
            this.active5.isActive5 = false
        }
    },
}
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        margin: 0;
        padding: 0;
    }
    /deep/ .el-card__body{
        padding: 0;
    }
    .header{
        width: 100%;
        height: 80px;
        background-color: #b7c6d9;
        overflow: hidden;
    }
    /* logo */
    .el-header .header .logo img{
        width: 120px;
        height: 50px;
        margin-top: 20px;
        margin-left: 150px;
        float: left;
    }
    /deep/ .el-header[data-v-4fd998ea]{
        text-align: left;
        background-color: #fff;
        background:rgba(R,G, B, A);
    }
    /* 导航栏 */
    a{
        text-decoration: none;
    }
    .hue{
        color: #313131;
    }
    .navigation ul{
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        align-items: center;
        float: right;
        margin-right: 80px;
        margin-top: 30px;
    }
    .navigation li{
        position: relative;
    }
    .navigation li{
        padding: 0 0 15px 35px;
    }
    .navigation div:hover,
    .navigation .active,
    .navigation .active:focus,
    .navigation li:hover>span {
        color:white;
    }
    .dropdown li{
        list-style-type: none;      
    }
    .dropdown li span{
        float: left;
        margin-right: 30px;
        margin-top: 20px;
        font-size: 15px;
        color: black; 
        cursor: pointer;
    }
    .dropdown li span:hover{
        color: rgb(253, 131, 131);
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .navigation i{
        font-size: 25px;
    }
    .navigation i:hover{
        color: rgb(246, 103, 103);
        font-weight: bolder;
    }
    .header .navigation .product i{
        font-size:20px; 
        color: #313131;    
        font-style:normal;   
    }
    .header .navigation a{
        color: #313131;
    }
    .header .navigation a:hover{
        color: #fff;
    }
    .header .navigation a:active{
        color: #fff;
    }
    /deep/.el-dropdown-link {
        cursor: pointer;
    }
    
    /* 产品资源 */
    .isActive1{
        color: white!important;
    }

    /* 关于我们 */
    .isActive5{
        color: white!important;
    }
</style>