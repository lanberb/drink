<template>
<section>
    <Menu/>
    <div class="thumbnail">
        <img src="~/static/image/sample/starbucks.jpg" alt="shop-thumbnail">
    </div>
    <div class="shop-informartion">
        <BreadcrumbList/>
    </div>
</section>
</template>

<script>
import axios from 'axios';
import Menu from '~/components/common/Menu.vue';
import BreadcrumbList from '~/components/common/BreadcrumbList.vue';
export default {
    components: {
        Menu,
        BreadcrumbList,
    },
    data: function(){ 
        return{
            message: '',
            params: {
                recommendTag: {},
            },
        }
    },
    mounted: function(){
        console.log(this.$route)
    },
    asyncData: async function(){
        return axios.get('https://cryptic-ridge-63036.herokuapp.com/api/').then(response => {
        console.log(response);
        return {
            message: response.data
        }
        }).catch(console.error);
    },
}
</script>

<style lang="scss">
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
*{
  font-family: $font-ja;
}
section{
    height: 100vh;
}
a.menu{
    top: 16px;
}
div.thumbnail{
    margin-bottom: 16px;
    width: 100vw;
    height: 250px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
div.shop-information{
    width: calc(100vw - 32px);
    position: relative;
    left: 16px;
    div.breadcrumb-list{
        margin-bottom: 16px;
    }
}

</style>