<template>
    <el-menu
      :default-active="'/index'"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <a v-on:click='logout' style="color: #222;float: right;padding: 20px;cursor:pointer">登出</a>
      <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
      <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
      <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">阿志商城</span>
    </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '首頁'},
        {name: '/shop', navItem: '商城'},
        {name: '/admin', navItem: '管理'}
      ]
    }
  },
  methods: {
    logout () {
      localStorage.setItem('token', '')
      this.$axios
        .get('/loginService/api/logout', {
        })
        .then((successResponse) => {
          alert('登出成功')
          this.$router.replace({ path: '/login' })
        })
        .catch((failResponse) => {
          alert('登出失敗')
        })
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
