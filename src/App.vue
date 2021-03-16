<template>
  <div id="app">
    <drawer></drawer>
    <router-view></router-view>
  </div>
</template>

<script>
import drawer from './components/drawer'
export default {
  name: "App",
  components: {
    'drawer': drawer
  },
};
</script>

<style>
body {
  background: black;
}

h1 {
  color: white;
}

.hand {
  cursor: pointer;
}
</style>
