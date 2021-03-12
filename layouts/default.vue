<template>
  <div>
    <Nuxt />
    <Menu/>
  </div>
</template>

<script>
import Menu from '~/components/common/Menu.vue';
export default {
  components: {
    Menu,
  },
}
</script>

<style>
*{
  margin: 0;
  -webkit-font-smoothing: antialiased;
}
html{
  background: #fff;
}
a.menu{
  margin-top: 48px;
  top: 16px;
}
</style>
