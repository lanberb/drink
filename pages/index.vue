<template>
  <section>
    <div class="head">
      <h2>おかえりなさい</h2>
      <h2>{{ name }}</h2>
    </div>
    <hr noshade>
    <div class="shop">
      <!-- <p>近くの店舗</p>
      <div class="list-tag">
        <Tag
        v-for="text in 5"
        :key="text.id"
        :data="'タグです'"
        />
      </div> -->
      <div class="list-shop">
        <CardShop
        v-for="shop in shopList"
        :key="shop.id"
        :id="shop.shopId"
        :name="shop.name_ja"
        :thumbnail="shop.thumbnail"
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
        const index = list.map(i => i.shopId).findIndex(i => i == store.store.state.orderlist.shop.id);
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
section{
  padding-top: 64px;
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
  margin-bottom: 16px;
  border: solid 1px #E5E5E5;
  width: calc(100% - 32px);
  position: relative;
  left: 16px;
}
div.shop{
  padding-top: 16px;
  overflow: hidden;
  p:first-child{
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 16px;
    color: #2a2a2a;
    font-weight: 600;
  }
  div.list-tag{
    margin-bottom: 24px;
    padding-left: 16px;
    padding-right: 16px;
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
    padding-left: 16px;
    padding-right: 16px;
    a.card-shop{
      margin-bottom: 20px;
    }
  }
}
</style>
