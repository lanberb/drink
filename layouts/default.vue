<template>
  <div>
    <Nuxt />
    <Menu/>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js';
import Menu from '~/components/common/Menu.vue';
export default {
  components: {
    Menu,
  },
  mounted: function() {
        if (!(!!firebase.auth().currentUser)) this.$router.push('/auth');
  },
}
</script>

<style lang="scss">
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
*{
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: $font-ja;
}
html{
  background: #fcfcfc;
}
a.menu{
  margin-top: 48px;
  top: 16px;
}
</style>
