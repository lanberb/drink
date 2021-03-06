<template>
  <section>
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
        v-for="shop in shopList"
        :key="shop.id"
        :id="shop.shopId"
        :name="shop.name_ja"
        :crowdStatus="shop.crowdStatus"
        />
      </div>
    </div>
    <Footer/>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase.js';
import Tag from '~/components/index/TagShop.vue';
import CardShop from '/components/index/CardShop.vue';
import Footer from '~/components/common/Footer.vue';

export default {
  components: {
    Tag,
    CardShop,
    Footer,
  },
  data: function(){ 
    return{
      message: '',
      params: {
        recommendTag: {},
      },
      shopList: [],
    }
  },
  mounted: function() {
    // console.log(this.shopList)
  },
  asyncData: async function(){
    const db = firebase.firestore();
    const list = [];
    return db.collection('shop').get().then(function(querySnapshot){
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        shop.shopId = doc.id;
        list.push(shop);
      });
      return {
        shopList: list.concat(),
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
    a.card-shop{
      margin-bottom: 20px;
    }
  }
}
</style>
