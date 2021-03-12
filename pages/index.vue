<template>
  <section>
    <div class="head">
      <h2>おかえりなさい</h2>
      <h2>{{ name }} さん</h2>
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
      name: !!firebase.auth().currentUser ? firebase.auth().currentUser.displayName : '',
      params: {
        recommendTag: {},
      },
      shopList: [],
    }
  },
  mounted: function() {
    if (!(!!firebase.auth().currentUser)) this.$router.push('/auth');
  },
  asyncData: async function(store){
    const db = firebase.firestore();
    var list = [];
    return db.collection('shop').get().then(function(querySnapshot){
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        shop.shopId = doc.id;
        list.push(shop);
      });
      if (!!store.store.state.orderlist.shop.id) {
        const index = list.map(i => i.id).indexOf(store.store.state.orderlist.shop.shopId);
        const el = list[index];
        list.splice(0);
        list.push(el);
      }
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
}
a.menu{
  display: none;
}
div.head{
  margin-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  color: #2a2a2a;
}
hr{
  display: block;
  margin-bottom: 32px;
  border: solid 1px #E5E5E5;
  width: calc(100% - 32px);
  position: relative;
  left: 16px;
}
div.shop{
  padding-left: 16px;
  padding-right: 16px;
  p:first-child{
    margin-bottom: 16px;
    color: #2a2a2a;
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
