<template>
  <nuxt-link
  class="menu"
  to="/orderlist">
    <div class="menu-badge"
    v-if="$store.state.orderlist.items.length != 0">
      <p>
        <span>{{ $store.state.orderlist.items.length }}</span>
      </p>
    </div>
    <div class="menu-image-box">
        <img src="~/static/svg/payment.svg" alt="menu-icon">
    </div>
  </nuxt-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">
a.menu{
  width: 56px;
  height: 56px;
  position: fixed;
  left: 100%;
  transform: translateX(calc(-100% - 16px));
  filter: drop-shadow( 0 4px 8px rgba(0, 0, 0, 0.1));
  background: #2a2a2a;
  border-radius: 8px;
  z-index: 1;
  div.menu-badge{
    position: absolute;
    top: -8px;
    left: -8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: orangered;
    p{
      text-align: center;
      span{
        color: #fff;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
  div.menu-image-box{
    width: 24px;
    height: 24px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
      fill: #fff;
    }
  }
}
</style>