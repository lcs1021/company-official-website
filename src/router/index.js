import VueRouter from "vue-router"
import AboutUs from '@/pages/AboutUs/AboutUs'
import HomePage from '../components/home/HomePage'
import ProductResources from '@/pages/ProductResources/ProductResources.vue'
import ConcentrationService from '@/pages/ProductResources/Content/Service/ConcentrationService'
import SystemExtend from '@/pages/ProductResources/Content/Extend/SystemExtend'
import SolutionProject from '@/pages/Solution/SolutionProject.vue'

import ItScience from '@/pages/Solution/IT/ItScience.vue'
import VPNNetworking from '@/pages/Solution/IT/Content/networking/MPLS_VPN/VPNNetworking.vue'
import MSTPNetworking from '@/pages/Solution/IT/Content/networking/MSTP/MSTPNetworking.vue'
import SDWANNetworking from '@/pages/Solution/IT/Content/networking/SD-WAN/SDWANNetworking.vue'

import ChainTrade from '@/pages/Solution/Trade/ChainTrade'
import CompanyOrganization from '@/pages/Solution/Company/CompanyOrganization'

import ServiceSystem from '@/pages/ServiceSupport/System/ServiceSystem'

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

const router = new VueRouter({
    routes:[
        // 关于我们
        {
            path: '/aboutus',
            component: AboutUs,
            meta:{
                title: '关于我们-亿联通信',
                index: 2,
                PageName: true,
            }
        },
        // 主页
        {
            path: '/homepage',
            component: HomePage,
            meta:{title: '亿联通信',index:1}
        },
        // 产品资源
        {
            path: '/productresources',
            component: ProductResources,
            meta:{title: '产品资源-亿联通信',index:2},
            children:[
                {
                    path: 'concentrationservice',
                    component: ConcentrationService,
                    meta:{index:3},
                },
                {
                    path: 'systemextend',
                    component: SystemExtend,
                    meta:{index:3}
                }
            ],
            // redirect: 'concentrationservice'

        },
        // 解决方案
        {            
            name:'solutionproject',
            path:'/solutionproject',
            component: SolutionProject,
            meta:{title:'解决方案-亿联通信'},           
            children:[
                {
                    // IT科技
                    name:'itscience',
                    path:'itscience',
                    component: ItScience,    
                    meta:{title:'解决方案-亿联通信'},                                              
                    children:[
                        {
                            // VPN组网
                            name:'vpn',
                            path:'vpn',
                            component: VPNNetworking,
                            meta:{index:2.26}
                        },
                        {
                            //MSTP组网
                            name:'mstp',
                            path:'mstp',
                            component: MSTPNetworking,
                            meta:{index:2.26}
                        },
                        {
                            // SD-WAN组网
                            name:'sdwan',
                            path:'sdwan',
                            component: SDWANNetworking,
                            meta:{index:2.26}
                        }
                    ],
                    redirect:'itscience/vpn'
                },
                // 连锁商贸
                {
                    name:'chaintrade',
                    path: 'chaintrade',
                    component: ChainTrade,
                    meta:{title:'解决方案-亿联通信',index:2.3,},                                              

                },
                // 政企机构
                {
                    name: 'companyorganization',
                    path: 'companyorganization',
                    component: CompanyOrganization,
                    meta:{title:'解决方案-亿联通信',index:2.8}, 
                }
            ]
        },
        // 服务支持          
        // 1、服务体系
        {
            path: '/servicesystem',
            component: ServiceSystem
        },
        //2、资料下载
   
            
    ],
    mode: 'history'
})

router.afterEach((to)=>{
    document.title = to.meta.title || '亿联通信'
})

export default router