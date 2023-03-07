// 控制 返回头部 的动画
export const TopAnimation = {
    data() {
        return {
            // 控制返回顶部
            TopFlag: false,                            
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScrollbox)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScrollbox)
    },
    methods: {
        handleScrollbox() {
            this.currentScroll = window.pageYOffset //表示当前滚动的位置
            if(this.currentScroll >= 200){
                this.TopFlag = true
            }           
            if(this.currentScroll < 300){
                this.TopFlag = false
            }     
        },
    },
}

// 控制 关于我们 的动画
export const AboutAnimation = {
    data() {
        return {
            // 控制加入我们
            AboutFlag_1: false,
            // 控制新闻中心
            AboutFlag_2: false,
            // 控制地图
            AboutFlag_3: false,
            // 控制尾部
            AboutFlag_4: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScrollbox)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScrollbox)
    },
    methods: {
        handleScrollbox() {
            this.currentScroll = window.pageYOffset //表示当前滚动的位置
            if(this.currentScroll >= 70){
                this.AboutFlag_1 = true
            } 
            if(this.currentScroll >= 250){
                this.AboutFlag_2 = true
            } 
            if(this.currentScroll >= 600){
                this.AboutFlag_3 = true
            } 
            if(this.currentScroll >= 800){
                this.AboutFlag_4 = true
            }
            if(this.currentScroll === 0){
                this.AboutFlag_1=false
                this.AboutFlag_2=false
                this.AboutFlag_3=false
            }       
        },
    },
}

// 控制 IT科技 的动画
export const ItAnimation = {
    data() {
        return {
           // 控制组网导航栏
           AnimateFlag_1:false,
           // 控制尾部
           AnimateFlag_2:false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScrollbox)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScrollbox)
    },
    methods:{
        handleScrollbox(){
            this.currentScroll = window.pageYOffset //表示当前滚动的位置
            if(this.currentScroll >= 630){
                this.AnimateFlag_1 = true
            }if(this.currentScroll >= 630){
                this.AnimateFlag_2 = true
            }if(this.currentScroll === 0){
                this.AnimateFlag_1 = false
                this.AnimateFlag_2 = false
            }
        }
    }
}

// 控制 连锁商贸 的动画
export const TradeAnimation = {
    data() {
        return {
            // 控制 方案价值
            TradeFlag_1: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScrollbox)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScrollbox)
    },
    methods:{
        handleScrollbox(){
            this.currentScroll = window.pageYOffset //表示当前滚动的位置
            if(this.currentScroll >= 550){
                this.TradeFlag_1 = true
            }if(this.currentScroll === 0){
                this.TradeFlag_1 = false
            }
        }
    }
}

// 控制 政企机构 的动画
export const CompanyAnimation = {
    data(){
        return {
            // 控制 企业网云管理的 方案价值
            CompanyFlag_1: false,
            //控制 云会议 的 方案
            CompanyFlag_2: false,
            //控制 云会议 的 方案价值
            CompanyFlag_3: false,
            //控制 VOIP 的 方案
            CompanyFlag_4: false,
            //控制 VOIP 的 方案价值
            CompanyFlag_5: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScrollbox)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScrollbox)
    },
    methods:{
        handleScrollbox(){
            this.currentScroll = window.pageYOffset //表示当前滚动的位置
            if(this.currentScroll >= 750){
                this.CompanyFlag_1 = true
            }
            if(this.currentScroll >= 1320){
                this.CompanyFlag_2 = true
            }
            if(this.currentScroll >= 2000){
                this.CompanyFlag_3 = true
            }
            if(this.currentScroll >= 2520){
                this.CompanyFlag_4 = true
            }
            if(this.currentScroll >= 2980){
                this.CompanyFlag_5 = true
            }
            if(this.currentScroll == 0){
                this.CompanyFlag_1 = false
                this.CompanyFlag_2 = false
                this.CompanyFlag_3 = false
                this.CompanyFlag_4 = false
                this.CompanyFlag_5 = false


            }
            console.log(this.currentScroll)
        }
    }
}

// 控制 前进后退 是否重新有动画
export const alignTransition = {
    data(){
        return {
            // 控制 关于我们 页面
            aboutUs_Flag: true,
            // 控制 it科技 页面（暂时有问题，未修）
            it_flag: false,
        }
    },
    mounted(){
        this.aboutUs_Flag = true
        this.it_flag = true
    },
    watch:{
        $route(to){
            
            if(to.meta.index == 2.26){
                this.it_flag = true
            }
            if(to.meta.index == 2){
                this.aboutUs_Flag = true
            }
            
            else{
                this.aboutUs_Flag = false
                // this.it_flag = false
            }
        }

    },
    
}