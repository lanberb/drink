<template>
  <div class="alert-modalview" v-if="!$store.state.orderlist.shop">
      <p>商品が追加されていません。</p>
      <p>この画面は商品の追加後にご利用いただけます。</p>
      <nuxt-link to="./">
        <span>前のページへ戻る</span>
      </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>