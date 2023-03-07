<template>
    <div>     
        <transition enter-active-class="animate__animated animate__slideInUp" appear>     
            <div class="networking" v-show="AnimateFlag_1">   
                <div class="navigation">
                    <ul>
                        <li>
                            <div :class="classObj1" tabindex="1" @click="toVPN">MPLS-VPN组网</div>                  
                        </li>
                        <li>
                            <div :class="classObj2" tabindex="2" @click="toMSTP">MSTP/自建组网</div>
                        </li>
                        <li>
                            <div :class="classObj3" tabindex="3" @click="toSDWAN">SD-WAN组网</div>
                        </li>
                    </ul>              
                </div>       
                
                <div style="min-width:1366px">
                    <keep-alive>
                        <router-view></router-view>                
                    </keep-alive>
                </div>
            </div>
        </transition>
    </div>
    
</template>

<script>
import { ItAnimation } from '@/mixin'

export default {
    name:'networking',
    data(){
        return {
            classObj1:{
                VPNBackColor:false,
            },
            classObj2:{
                MSTPBackColor:false,
            },
            classObj3:{
                SDWANBackColor:false,
            }
        }
    },
    mixins:[ItAnimation],
    methods:{
        toVPN(){
            this.$router.replace({
                path:'/solutionproject/itscience/vpn'
            })
        },
        toMSTP(){
            this.$router.replace({
                path:'/solutionproject/itscience/mstp'
            })
        },
        toSDWAN(){
            this.$router.replace({
                path:'/solutionproject/itscience/sdwan'
            })
        }
    },
    watch:{
        $route(to){
            if(to.path === '/solutionproject/itscience/vpn'){
                this.classObj1.VPNBackColor = true 
                this.classObj2.MSTPBackColor = false
                this.classObj3.SDWANBackColor = false
            }if(to.path === '/solutionproject/itscience/mstp'){
                this.classObj1.VPNBackColor = false
                this.classObj2.MSTPBackColor = true
                this.classObj3.SDWANBackColor = false
            }if(to.path === '/solutionproject/itscience/sdwan'){               
                this.classObj1.VPNBackColor = false
                this.classObj2.MSTPBackColor = false
                this.classObj3.SDWANBackColor = true
            }
        },
    },
    mounted(){
        if(this.$route.path === '/solutionproject/itscience/vpn'){
            this.classObj1.VPNBackColor = true 
            this.classObj2.MSTPBackColor = false
            this.classObj3.SDWANBackColor = false
        }if(this.$route.path === '/solutionproject/itscience/mstp'){
            this.classObj1.VPNBackColor = false
            this.classObj2.MSTPBackColor = true
            this.classObj3.SDWANBackColor = false
        }if(this.$route.path === '/solutionproject/itscience/sdwan'){               
            this.classObj1.VPNBackColor = false
            this.classObj2.MSTPBackColor = false
            this.classObj3.SDWANBackColor = true
        }
    }
}
</script>

<style scoped>  
    /* 组网 部分 */
    .networking{
        width: 100%;
        height: 550px;
        /* background-color: rgb(2, 67, 137); */
        background-color: #383B4C;
        padding-top: 30px;
    }
    /* 组网导航栏 */
    .navigation{
        width: 900px;
        height: 60px;
        /* background-color: rgb(231, 232, 255); */
        background-color: #4d5770;
        border-radius: 50px;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
    }
    .navigation ul{
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
    }
    .navigation ul li{
        width: 300px;
        text-align: center;
        /* color: #606266; */
        color: white;
        font-size: 18px;
        cursor: pointer;
        list-style-type: none;
        float: left;
        line-height: 60px;
    }
    .VPNBackColor{
        color: white;
        border-radius: 35px;
        text-align: center;
        background-color: #F56C6C;
        background: linear-gradient(#ff4949,#F56C6C);
    }
    .MSTPBackColor{
        color: white;
        border-radius: 35px;
        text-align: center;
        background: linear-gradient(#ff4949,#F56C6C);

    }
    .SDWANBackColor{
        color: white;
        border-radius: 35px;
        text-align: center;
        background: linear-gradient(#ff4949,#F56C6C);

    }
</style>