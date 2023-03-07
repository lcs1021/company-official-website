<template>
        <el-footer>
                <div style="
              
                    background-color: #383B4C;
                    position: relative;
                    width: 100%;
                    height: 200px;
                ">
                    <div class="footerLogo">
                        <img src="@/assets/img/LOGO1.0.png" alt="" width="150px" height="60px">
                    </div>
                    <div class="telphone" >
                        <i style="font-style: normal;font-size: 20px;">咨询热线：</i> <br>
                        <i style="font-style: normal;font-size: 20px;">13302995127</i>
                    </div>
                </div>
            </el-footer>
</template>

<script>


export default {
    name: 'FooterBar',
}
</script>

<style scoped>
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        width: 100%;
        margin: 0px;
        padding: 0px;
        margin-bottom: 141px;
    }
    .footerLogo{
      border-right: 1px solid #fff;
      position: absolute;
      top: 40px;
      padding: 40px;
    }
    .telphone,.footerLogo{
      float: left;
      width: 400px;
      height: 50px;
      margin-left: 20px;
      text-align: center;
      color: white;      
    }
    .telphone{
      margin-left: 110px;
      text-align: left;
      position: absolute;
      top: 80px;
      left: 550px;
    }
    /deep/ [data-v-4fd998ea] .el-header[data-v-4fd998ea], .el-footer[data-v-4fd998ea][data-v-4fd998ea]{
        background-color: rgb(245, 245, 246);
    }
    
</style>