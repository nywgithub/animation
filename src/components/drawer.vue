<template>
  <div class="drawer">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      点我打开
    </el-button>
    <el-drawer title="导航" :visible.sync="drawer" :direction="direction">
      <router-link to="/404">404</router-link>
      <router-link to="/click">点击</router-link>
      <router-link to="/hover">悬浮</router-link>
      <router-link to="/in">入场动画</router-link>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: 'ltr'
    };
  },
  watch: {
    $route() {
      this.drawer = false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.drawer {
  .el-drawer__body {
    display: flex;
    justify-content: center;
  }
  a {
    flex-basis: 20%;
    display: inline-block;
    margin: 10px;
    color: rgb(31, 169, 224);
    text-decoration: none;
  }
}
</style>
