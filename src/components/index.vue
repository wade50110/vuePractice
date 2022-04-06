<template>
  <body id='indexBack' style='overflow:scroll'>
    <h2 style="color:#E6E6FA;">工作經歷</h2>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span class='title'>鴻揚科技股份有限公司-軟體工程師</span>
        </div>
    <div class="text item">
      <span class="text">
      駐點在【玉山銀行】<br>
      <span class="title">專案</span>:玉山全球企業網銀<br>
      <span class="title">工作內容</span>:Java使用TestNG架構測試編審放流程都符合預期結果。
      </span>
    </div>
    </el-card>
    <br>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span class='title'>神通資訊科技股份有限公司-系統分析師</span>
        </div>
    <div class="text item">
      <span class="text">
      駐點在【財政資訊中心】<br>
      <span class="title">專案</span>:賦稅再造地方稅建置第3期延續維護委外服務案(維護)<br>
      財政資訊中心稅務輔助行政系統整合再造建置委外服務案(整合)<br>
      <span class="title">工作內容</span>:Spring+SpringMVC+MyBatis，依照現行架構進行程式開發、系統維運，
      撰寫過RestApi。
      </span>
    </div>
    </el-card>
    <br>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
        <span class='title'>台灣利優資訊科技有限公司-RD</span>
        </div>
    <div class="text item">
      <span class="text">
      駐點在【宏碁資訊】<br>
      <span class="title">專案</span>:司法院第三代一、二審民刑事審判資訊系統<br>
      <span class="title">工作內容</span>:Spring+SpringMVC+MyBatis，依照現行架構進行、系統維運。
      </span>
    </div>
    </el-card>
  </body>
</template>
<script>
export default {
  name: 'Index'
}
</script>
<style scoped>
.text {
    font-size: 14px;
    text-align: left;
  }

.title {
    font-size: 18px;
    font-weight:bold;
}

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    margin: auto;
  }

  #indexBack {
    background:url('../assets/pexels-photo-259915.jpeg') no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
</style>
