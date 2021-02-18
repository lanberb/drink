<template>
  <section>
    <Menu/>
    <div class="head">
      <h2>おかえりなさい</h2>
      <h2>John Doe</h2>
    </div>
    <hr noshade>
    <div class="shop">
      <p>近くの店舗</p>
      <div class="list-tag">
        <Tag
        v-for="text in 5"
        :key="text.id"
        :data="'タグです'"
        />
      </div>
      <div class="list-shop">
        <CardShop
        v-for="url in 3"
        :key="url.id"
        :url="'/'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Menu from '~/components/common/Menu.vue';
import Tag from '~/components/index/TagShop.vue';
import CardShop from '/components/index/CardShop.vue';

export default {
  components: {
    Menu,
    Tag,
    CardShop,
  },
  data: function(){ 
    return{
      message: '',
      params: {
        recommendTag: {},
      },
    }
  },
  asyncData: async function(){
    return axios.get('https://cryptic-ridge-63036.herokuapp.com/api/').then(response => {
      // console.log(response);
      return {
        message: response.data
      }
    }).catch(console.error);
  },
}
</script>

<style lang="scss" scoped>
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
*{
  font-family: $font-ja;
}
section{
  padding-top: 64px;
  padding-left: 16px;
  padding-right: 16px;
  height: 100vh;
}
div.head{
  position: relative;
  margin-bottom: 32px;
}
hr{
  display: block;
  border: solid 1px #E5E5E5;
  position: relative;
  margin-bottom: 24px;
}
div.shop{
  p:first-child{
    margin-bottom: 16px;
    font-weight: bold;
  }
  div.list-tag{
    margin-bottom: 24px;
    overflow: visible scroll;
    white-space: nowrap;
    &::-webkit-scrollbar{
      display: none;
    }
    a.tag-shop{
      margin-right: 12px;
      &:last-child{
        margin: 0;
      }
    }
  }
  div.list-shop{
    &::before{
      content: '';
      position: absolute;
      margin-top: 130px;
      left: 0;
      width: 100vw;
      height: calc(100%);
      background: #F2F2F2;
    }
    a.card-shop{
      margin-bottom: 20px;
    }
  }
}

</style>
