<template>
    <div>
        <NavigationBar style="margin-bottom:20px"/>
        <keep-alive :include="['HomeHeader','NavigationBar']">
          
          <router-view></router-view>
          <router-view ></router-view>
          <!-- 轮播图 -->
          <el-carousel :interval="3000" arrow="always" height="600px" >
              <el-carousel-item v-for="(i,index) in img" :key="index" >
                  
              </el-carousel-item>
          </el-carousel>

        </keep-alive>
    </div>
</template>

<script>
import NavigationBar from '@/components/header/NavigationBar.vue';

export default {
    name: 'HeaderPage',
    components:{NavigationBar},
    data(){
        return{
            img:['@/assets/img/image1.jpg','@/assets/img/image2.jpg','@/assets/img/image3.jpg','@/assets/img/image4.jpg']
        }
    }
}
</script>

<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
    background: url(@/assets/img/image1.jpg) no-repeat 100% 80%;
    background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background: url(@/assets/img/image2.jpg) no-repeat 100% 80%;
    background-size: 100% 100%;
    background-color: #d3dce6;
  }
  .el-carousel__item:nth-child(3n) {
    background: url(@/assets/img/image3.jpg) no-repeat 100% 80%;
    background-size: 100% 100%;
    background-color: #d3dce6;
  }
  .el-carousel__item:nth-child(6n) {
    background: url(@/assets/img/image4.jpg) no-repeat 100% 80%;
    background-size: 100% 100%;
    background-color: #d3dce6;
  }
  /deep/ .el-carousel__indicators{
    top: 550px;
  }
</style>