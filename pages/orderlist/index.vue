<template>
<section>
    <div class="order-info">
        <h2>
            <span>現在の会計リスト</span>
        </h2>
    </div>
    <hr noshade>
    <div class="order-unit">
        <h4>
            <span>{{ $store.state.orderlist.shop.name }}</span>
        </h4>
        <div class="order-item"
        v-for="(item, index) in $store.state.orderlist.items"
        :key="'item-' + index">
            <div class="order-item-image">
                <img src="~/static/image/sample/coffee.jpg" alt="item-image">
            </div>
            <div class="order-item-details">
                <h4 class="order-item-name">
                    <span>{{ item.name }}</span>
                </h4>
                <p class="order-item-data">
                    <span>{{'アイス / サイズ：S / 店内お召し上がり / 持ち帰り用カップ / 個数：' + item.number}}</span>
                </p>
                <p class="order-item-price">
                    <span>{{ '¥' + item.sumPrice }}</span>
                </p>
            </div>
        </div>
    </div>
    <hr noshade>
    <div class="order-total">
        <p>
            <span>Total / 合計</span>
        </p>
        <p class="order-total-price">
            <span>{{'¥' + total }}</span>
        </p>
    </div>
    <div class="order-button">
        <button class="order-button-purchase">
            <p>
                <span>Payment / 会計・注文する</span>
            </p>
        </button>
        <nuxt-link class="order-button-back"
        :to="{
            name: 'shop',
            path: '../:shop/',
            params: {
                shop: $store.state.orderlist.shop.id,
            },
        }">
        <!-- <nuxt-link class="order-button-back" to="./"> -->
            <span>Back / 店舗画面へ戻る</span>
        </nuxt-link>
    </div>
    <Footer/>
    <div class="alert-modalview" v-if="!$store.state.orderlist.shop.id">
        <div class="textbox">
            <h3>商品が追加されていません。</h3>
            <p>この画面は商品の追加後にご利用いただけます。</p>
            <nuxt-link to="./">
                <span>前のページへ戻る</span>
            </nuxt-link>
        </div>
    </div>
</section>
</template>

<script>
import axios from "axios";
import firebase from '~/plugins/firebase.js';
import Footer from '~/components/common/Footer.vue';
export default {
    components: {
        Footer,
    },
    data: function(){
        return {
            shop: '',
            subTotal: this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0),
            includeTax: Math.round(this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0) * (this.$store.state.orderlist.shop.tax - 1)),
            total: Math.round(this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0) * this.$store.state.orderlist.shop.tax),
        }
    },
    fetch: async function(store, params) {
        axios.get('/api/geek/').then(function(res){
            // console.log(res);
        }).catch(console.error());
    }
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
div.order-info{
    margin-bottom: 32px;
    padding-left: 16px;
    padding-right: 16px;
    width: calc(100% - 88px);
}
hr{
    margin-bottom: 32px;
    width: calc(100% - 32px);
    display: block;
    position: relative;
    left: 16px;
    border: solid 1px #E5E5E5;
}
div.order-unit{
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
    border-radius: 16px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    div.seats-available{
        margin-bottom: 16px;
        display: flex;
        width: 28%;
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
    div.order-item{
        padding-top: 24px;
        padding-bottom: 24px;
        border-top: solid 1px #e5e5e5;
        width: 100%;
        font-size: 0;
        div.order-item-image{
            margin-right: 16px;
            border-radius: 8px;
            width: 120px;
            height: 180px;
            display: inline-block;
            position: relative;
            background: palevioletred;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        div.order-item-details{
            width: calc(100% - 136px);
            display: inline-block;
            vertical-align: top;
            position: relative;
            h4.order-item-name{
                margin-bottom: 12px;
                line-height: 16px;
                word-break: break-all;
                span{
                    color: #2a2a2a;
                    font-size: 16px;
                }
            }
            p.order-item-data{
                margin-bottom: 12px;
                line-height: 16px;
                span{
                    color: #2a2a2a;
                    font-size: 10px;
                    font-weight: lighter;
                }
            }
            div.order-item-number{
                display: flex;
                justify-content: space-between;
                margin-bottom: 12px;
                max-width: 180px;
                button{
                    width: 32px;
                    height: 32px;
                    border: 0;
                    border-radius: 8px;
                    background: #2A2A2A;
                    &:focus{ outline: none; }
                    &:active{ opacity: 0.4; }
                    &.subtract{
                        &::before{
                            content: '';
                            position: absolute;
                            transform: translate(-50%, -50%);
                            width: 16px;
                            height: 2px;
                            background: #fff;
                        }
                    }
                    &.add{
                        &::before{
                            content: '';
                            position: absolute;
                            transform: translate(-50%, -50%);
                            width: 16px;
                            height: 2px;
                            background: #fff;
                        }
                        &::after{
                            content: '';
                            position: absolute;
                            transform: translate(-50%, -50%);
                            width: 2px;
                            height: 16px;
                            background: #fff;
                        }
                    }
                }
                p{
                    span{
                    color: #2a2a2a;
                        font-size: 24px;
                        font-weight: bold;
                    }
                }
            }
            p.order-item-price{
                padding-top: 16px;
                border-top: solid 1px #e5e5e5;
                text-align: left;
                span{
                    color: #2a2a2a;
                    font-size: 24px;
                    font-weight: bold;
                }
            }
        }
    }
}
div.order-total{
    margin-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    height: 36px;
    p{
        line-height: 36px;
        span{
            color: #2a2a2a;
            font-size: 20px;
            font-weight: bold;
        }
    }
    p.order-total-price{
        line-height: 36px;
        span{
            color: #2a2a2a;
            font-size: 36px;
        }
    }
}
div.order-button{
    margin-bottom: 32px;
    padding-left: 20px;
    padding-right: 20px;
    button.order-button-purchase{
        appearance: none;
        margin-bottom: 8px;
        border: 0;
        border-radius: 16px;
        width: 100%;
        height: 64px;
        &:active{opacity: 0.4;}
        &:focus{outline: none;}
        background: #2a2a2a;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        p{
            line-height: 100%;
            span{
                color: #fff;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    a.order-button-back{
        display: block;
        border: solid 1px #2a2a2a;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        text-align: center;
        text-decoration: none;
        line-height: 48px;
        span{
            color: #2a2a2a;
            font-size: 12px;
            font-weight: bold;
        }
    }
}
div.alert-modalview{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(8px);
    z-index: 2;
    div.textbox{
        padding: 32px;
        margin: 0;
        border-radius: 16px;
        width: calc(100% - 128px);
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        background: #fff;
        text-align: center;
        h3, p, a{
            margin-bottom: 16px;
            color: #2a2a2a;
        }
        p{
            font-size: 12px;
        }
    }
}
</style>