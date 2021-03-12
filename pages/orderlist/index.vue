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
                    <span>{{ '個数: ' + $store.state.orderlist.items[index].number + ', ' 
                        + text.size[$store.state.orderlist.items[index].size] + 'サイズ, ' 
                        + text.for[$store.state.orderlist.items[index].for] + ', ' 
                        + (!!$store.state.orderlist.items[index].type ? text.type[$store.state.orderlist.items[index].type] + ', ' : '')
                        + $store.state.orderlist.items[index].topping.map(i => i.name_ja).reduce((ini, cur) => ini + cur + ', ', '') 
                    }}</span>
                </p>
                <p class="order-item-price">
                    <span>{{ '¥' + item.sumPrice }}</span>
                </p>
                <button class="order-item-remove" @click="reloadStore(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18">
                        <path d="M1,16a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V4H1ZM3.46,8.88,4.87,7.47,7,9.59,9.12,7.47l1.41,1.41L8.41,11l2.12,2.12L9.12,14.53,7,12.41,4.88,14.53,3.47,13.12,5.59,11ZM10.5,1l-1-1h-5l-1,1H0V3H14V1Z" style="fill: #2a2a2a"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <hr noshade>
    <div class="order-quantity">
        <p>
            <span>Q'ty / 商品数</span>
        </p>
        <p class="order-price">
            <span>{{ quantity + '' }}</span>
        </p>
    </div>
    <div class="order-subtotal">
        <p>
            <span>Sub / 小計</span>
        </p>
        <p class="order-price">
            <span>{{ '¥' + subTotal }}</span>
        </p>
    </div>
    <div class="order-tax">
        <p>
            <span>Tax / 内税</span>
            <small>({{ Math.round(($store.state.orderlist.shop.tax - 1) * 100) }}%)</small>
        </p>
        <p class="order-price">
            <span>{{ '¥' + tax }}</span>
        </p>
    </div>
    <hr noshade>
    <div class="order-total">
        <p>
            <span>Total / 合計</span>
        </p>
        <p class="order-price">
            <span>{{ '¥' + total }}</span>
        </p>
    </div>
    <div class="order-button">
        <button class="order-button-purchase" @click="order">
            <span>Payment / 会計・注文する</span>
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
import firebase from '~/plugins/firebase.js';
import Footer from '~/components/common/Footer.vue';
export default {
    components: {
        Footer,
    },
    methods: {
        reloadStore: function(i){
            this.$store.commit('orderlist/removeItem', i);
            this.subTotal = this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0);
            this.tax = Math.round(this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0) * (this.$store.state.orderlist.shop.tax - 1));
            this.total = Math.round(this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0) * this.$store.state.orderlist.shop.tax);
            this.quantity = this.$store.state.orderlist.items.map(i => i.number).reduce((ini, cur) => ini + cur, 0);
        },
        order: function(){
            const order = new Object();
            order.user = new Object();
            order.items = new Object();
            Object.assign(order.user, this.$store.state.auth.user);
            Object.assign(order.items, this.$store.state.orderlist.items);
            this.$store.dispatch('orderlist/order', order);
            this.$router.push('/orderlist/thanks');
        }
    },
    data: function(){
        return {
            subTotal: this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0),
            tax: Math.round(this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0) * (this.$store.state.orderlist.shop.tax - 1)),
            total: Math.round(this.$store.state.orderlist.items.map(i => i.sumPrice).reduce((ini, cur) => ini + cur, 0) * this.$store.state.orderlist.shop.tax),
            quantity: this.$store.state.orderlist.items.map(i => i.number).reduce((ini, cur) => ini + cur, 0),
            text: {
                size: {
                    'small': 'S',
                    'medium': 'M',
                    'large': 'L',
                },
                for: {
                    'here': '店内',
                    'togo': 'お持ち帰り',
                },
                type: {
                    'hot': 'ホット',
                    'iced': 'アイス',
                }
            },
        }
    },
    mounted: function() {
        if (!(!!firebase.auth().currentUser)) this.$router.push('/auth');
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
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 20px;
    background: #fff;
    border-radius: 16px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    h4{
        margin-bottom: 8px;
    }
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
                line-height: 12px;
                span{
                    color: #2a2a2a;
                    font-size: 12px;
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
            button.order-item-remove{
                width: 32px;
                height: 32px;
                border: solid 1px #2a2a2a;
                border-radius: 8px;
                position: absolute;
                top: 100%;
                left: 100%;
                transform: translate(-100%, -100%);
                background: #fff;
                &:active{opacity: 0.4;}
                &:focus{outline: none;}
                svg{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transform: scale(0.8);
                    fill: #2a2a2a
                }
            }
        }
    }
}
div.order-quantity, div.order-subtotal, div.order-tax{
    margin-bottom: 8px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    p{
        span{
            color: #2a2a2a;
            font-size: 16px;
            font-weight: lighter;
        }
    }
    &.order-tax{
        margin-bottom: 32px;
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
    p.order-price{
        line-height: 36px;
        span{
            color: #2a2a2a;
            font-size: 36px;
        }
    }
}
div.order-button{
    margin-bottom: 32px;
    padding-left: 16px;
    padding-right: 16px;
    button.order-button-purchase{
        appearance: none;
        margin-bottom: 8px;
        border: 0;
        border-radius: 16px;
        width: 100%;
        height: 64px;
        background: #2a2a2a;
        text-align: center;
        text-decoration: none;
        line-height: 64px;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        &:focus{ outline: none; }
        &:active{ opacity: 0.4; }
        span{
            color: #fff;
            font-size: 18px;
            font-weight: bold;
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
    position: fixed;
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