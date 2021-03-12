<template>
    <nuxt-link 
    class="tag-shop" 
    to="/">
        <p>
            <span>{{ data }}</span>
        </p>
    </nuxt-link>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="scss">
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
a.tag-shop{
    display: inline-block;
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background: #2a2a2a;
    background: repeating-linear-gradient(-45deg,#ff7171 0px, #ff7171 50px, #9fd8df 50px, #9fd8df 100px);
    text-decoration: none;
    p{
        text-align: center;
        span{
            color: #fff;
            font-family: $font-ja;
            font-weight: bold;
            font-size: 12px;
            line-height: 40px;
        }
    }
}
</style>