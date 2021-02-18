<template>
    <nuxt-link 
    class="card-shop"
    :to="{
        name: 'shop-id',
        path: '/shop/:id?',
        params: {
            id: 'スターバックス仙台中央通店',
        },
    }">
        <p class="name">
            <span>タイトル</span>
        </p>
        <div class="image-list">
            <div 
            class="image-box"
            v-for="url in 3"
            :key="url.id">
                <img src="~/static/image/sample/starbucks.jpg" alt="shop-image">
            </div>
        </div>
        <hr noshade>
        <div class="access">
            <div class="icon">
                <img src="~/static/svg/access.svg" alt="">
            </div>
            <p class="label">
                <span>JR仙台駅から徒歩10分(地下歩道からだと5分)</span>
            </p>
        </div>
        <div class="information">
            <div class="seats-available">
                <div class="icon">
                    <img src="~/static/svg/seats.svg" alt="seats-image">
                </div>
                <p class="label">
                    <span>空席あり</span>
                </p>
            </div>
            <div class="price-drink">
                <div class="icon">
                    <img src="~/static/svg/coffee.svg" alt="drink-image">
                </div>
                <p class="label">
                    <span>¥350~¥720</span>
                </p>
            </div>
            <div class="price-meal">
                <div class="icon">
                    <img src="~/static/svg/tableware.svg" alt="meal-image">
                </div>
                <p class="label">
                    <span>¥440~¥890</span>
                </p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: ['url'],
}
</script>

<style lang="scss">
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
a.card-shop{
    display: inline-block;
    padding: 20px;
    width: calc(100% - 40px);
    background: #fff;
    border-radius: 16px;
    color: #2a2a2a;
    text-decoration: none;
    filter: drop-shadow( 0 4px 8px rgba(0, 0, 0, 0.1));
    p.name{
        margin-bottom: 12px;
        span{
            font-family: $font-ja;
            font-weight: bold;
            line-height: 24px;
        }
    }
    div.image-list{
        white-space: nowrap;
        margin-bottom: 16px;
        overflow: scroll;
        width: 100%;
        &::-webkit-scrollbar{
            display: none;
        }
        div.image-box{
            display: inline-block;
            margin-right: 10px;
            width: 180px;
            height: 120px;
            &:last-child{
                margin: 0;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    hr{
        margin-bottom: 12px;
    }
    div.icon{
        margin-right: 4px;
        position: relative;
        width: 16px;
        height: 16px;
        img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    div.access{
        display: flex;
        margin-bottom: 12px;
        width: 100%;
        p.label{
            position: relative;
            width: 100%;
            span{
                position: absolute;
                font-size: 12px;
                font-weight: lighter;
                line-height: 16px;
            }
        }
    }
    div.information{
        display: flex;
        justify-content: space-between;
        width: 100%;
        div.seats-available, div.price-drink, div.price-meal{
            display: flex;
            width: 28%;
            p.label{
                position: relative;
                width: 100%;
                span{
                    position: absolute;
                    font-size: 12px;
                    font-weight: lighter;
                    line-height: 16px;
                }
            }
        }
    }
}
</style>