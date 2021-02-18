<template>
  <div class="breadcrumb-list">
      <div class="crumb"
      v-for="(value) in crumbs"
      :key="value.id"
      >
        <!-- <div class="crumb-icon"
        v-if="index != 0"
        >
          <img src="~/static/svg/next.svg" alt="to">
        </div> -->
        <p class="crumb-text">
          <span>{{ value }}</span>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['crumbs'],
}
</script>

<style lang="scss">
div.breadcrumb-list{
  margin-bottom: 12px;
  position: relative;
  div.crumb{
    color: #848484;
    margin-right: 8px;
    display: inline-block;
    position: relative;
    p.crumb-text{
      span{
          font-size: 12px;
          font-weight: bold;
          line-height: 16px;
      }
    }
  }
}

</style>