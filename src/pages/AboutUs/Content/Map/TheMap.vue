<template>
    <span>
        <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
            打开地图导航
        </el-button>

        <el-drawer
            title="请选择软件进行导航"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
            size="30%"   
        >
            <div @click="openApp(1)">高德地图</div> <br>
            <div @click="openApp(2)">百度地图</div>
        </el-drawer>
    </span>
</template>

<script>

export default {
    name:'TheMap',
    data() {
      return {
        drawer: false,
        direction: 'btt',
        EndXY:{
            lng:113.951486,
            lat:22.56639,
            city:'深圳市'
        }
      };
    },
    methods: {
        handleClose(done) {
            // this.$confirm('确认关闭？')
            //   .then(_ => {
                
            //   })
            //   .catch(_ => {});
            done();
        },
        openApp(value){
            /* Start  判断手机是IOS还是安卓 */
            let u = navigator.userAgent;
            //判断是否安卓
            let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
            // 判断是否IOS
            let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            /* End */
            //判断是否点击高德地图
            if(value === 1) {
                console.log(bbb);

                //判断是否是安卓手机
                if(isAndroid) {
                    let queryStr = `?sourceApplication=msite&lat=${this.StartXY.lat}&lon=${this.StartXY.lng}&dev=1&style=2`
                    window.location.href = `androidamap://navi${queryStr}`; 
                }else if(isIOS) {
                    //IOS手机————高德地图不区分ios和安卓
                    let queryStr = `?sourceApplication=msite&lat=${this.StartXY.lat}&lon=${this.StartXY.lng}&dev=1&style=2`
                    window.location.href = `androidamap://navi${queryStr}`;
                    let startTime = Date.now();
                    let count = 0;
                    let endTime = 0;
                    let t = setInterval(function () {
                        count += 1;
                        endTime = Date.now() - startTime;
                        if (endTime > 7000) {
                            clearInterval(t);
                        }
                        if (count < 30) return;
                        if (!(document.hidden || document.webkitHidden)) {
                        window.location.href =
                            "https://uri.amap.com/marker?position=116.545123,39.915599";
                        }
                    }, 200);
                    window.onblur = function () {
                        clearInterval(t);
                    };
                }
            }else if(value === 2){
                let queryStr = `?origin=name:我的位置|latlng:${this.StartXY.lat},${this.StartXY.lng}&destination=${this.EndXY.lat},${this.EndXY.lng}&region=${this.EndXY.city}&coord_type=bd09ll&mode=driving`
                if(isAndroid) {
                    window.location.href = `bdapp://map/direction${queryStr}`;
                    //以下代码为判断app是否已经打开
                    let startTime = Date.now();
                    let count = 0;
                    let endTime = 0;
                    let t = setInterval(function () {
                        count += 1;
                        endTime = Date.now() - startTime;
                        //如果800毫秒后还未打开，清楚定时器，直接打开浏览器端 
                        if (endTime > 800) {
                            clearInterval(t);
                        }
                        if (count < 30) return;
                        //（是否打开的判断逻辑为当前页面是否进入后台）
                        if (!(document.hidden || document.webkitHidden)) {
                            window.location.href =
                            "http://api.map.baidu.com/direction" +
                            queryStr +
                            "&output=html";
                        }  
                        console.log(aaa);
                        //20为20毫秒判断一次，app是否打开  
                    }, 20);
                    window.onblur = function () {
                        clearInterval(t);
                    };          
                }else if(isIOS) {
                    window.location.href = `baidumap://map/direction${queryStr}`;
                }
            }
        }
    }
}
</script>

<style scoped>
    /deep/.el-drawer{
        text-align: center;
        font-size: 25px;
    }
    /deep/.el-link{
        line-height: 50px;
        font-size: 22px;
    }
</style>