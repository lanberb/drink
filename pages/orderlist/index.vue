<template>
<section>
    <div class="item-info">
        <h2>
            <span>現在の会計リスト</span>
        </h2>
    </div>
    <hr noshade>
</section>
</template>

<script>
import firebase from '~/plugins/firebase.js';
export default {
    mounted: function(){
        const db = firebase.firestore();
        return db.collection('shop').get().then(function(querySnapshot){
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log('店名: ', doc.data());


                db.collection('shop').doc(doc.id).collection('menu_drink').get().then(function(qaa){
                    qaa.forEach((docs) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log('ドリンク名: ', docs.data());
                    });
                });
            });
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
    height: 100vh;
}
div.item-info{
    margin-bottom: 32px;
    padding-left: 16px;
    padding-right: 16px;
    width: calc(100% - 88px);
}
hr{
    width: calc(100% - 32px);
    display: block;
    position: relative;
    left: 16px;
    border: solid 1px #E5E5E5;
    position: relative;
}

</style>