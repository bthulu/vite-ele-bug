<template>
  <el-button type="primary" @click="alert">戳我出bug</el-button>
</template>

<script lang="ts" setup>
import {ElMessage} from "element-plus";

const alert = () => ElMessage.error('样式出不来');

</script>

<style>
body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", Arial, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
