<template>
    <section>
        <div class="head">
        <h2>{{ name }}, </h2>
        <h2>いつもの一杯をどうぞ</h2>
        </div>
        <hr noshade>
        <div class="usual">
            <div class="order-unit"
            v-for="(usual, index) in receipts"
            :key="'usual' + index">
                <h4>
                    <span>{{ usual.shop.name }}</span>
                </h4>
                <div class="order-item"
                v-for="(item, index) in usual.items"
                :key="'item-' + index">
                    <div class="order-item-image">
                        <img src="~/static/image/sample/coffee.jpg" alt="item-image">
                    </div>
                    <div class="order-item-details">
                        <h4 class="order-item-name">
                            <span>{{ item.name }}</span>
                        </h4>
                        <p class="order-item-data">
                            <span>{{ '個数: ' + item.number + ', ' 
                                + text.size[item.size] + 'サイズ, ' 
                                + text.for[item.for] + ', ' 
                                + (!!item.type ? text.type[item.type] + ', ' : '')
                                + item.topping.map(i => i.name_ja).reduce((ini, cur) => ini + cur + ', ', '') 
                            }}</span>
                        </p>
                        <p class="order-item-price">
                            <span>{{ '¥' + item.sumPrice }}</span>
                        </p>
                    </div>
                </div>
                <div class="order-subtotal">
                    <p>
                        <span>Sub / 小計</span>
                    </p>
                    <p class="order-price">
                        <span>{{ '¥' + usual.payment.subTotal }}</span>
                    </p>
                </div>
                <div class="order-tax">
                    <p>
                        <span>Tax / 内税</span>
                    </p>
                    <p class="order-price">
                        <span>{{ '¥' + usual.payment.tax }}</span>
                    </p>
                </div>
                <div class="order-total">
                    <p>
                        <span>Total / 合計</span>
                    </p>
                    <p class="order-price">
                        <span>{{ '¥' + usual.payment.total }}</span>
                    </p>
                </div>
                <button class="order-item-order" @click="order(usual)">
                    <span>Order / このセットを注文する</span>
                </button>
                <button class="order-item-remove" @click="remove(usual)">
                    <span>Remove / このセットを削除する</span>
                </button>
            </div>
        </div>
        <Footer/>
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
        order: function(order) {
            this.$store.commit('orderlist/setUsual', {
                shop: order.shop,
                items: Object.values(order.items),
            });
        },
        remove: function(order) {
            this.$store.dispatch('orderlist/removeUsual', {
                uid: order.user.uid,
                id: order.id + '',
            });
            this.receipts.splice(this.receipts.map(i => i.id).indexOf(order.id), 1)
        },
    },
    mounted: function() {
        console.log(this.receipts)
    },
    data: function(){ 
        return{
            name: !!firebase.auth().currentUser ? firebase.auth().currentUser.displayName : '',
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
            receipts: '',
        }
    },
    asyncData: async function(){
        var list = [];
        return firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid).collection('order_usual').get().then(function(querySnapshot){
            querySnapshot.forEach((doc) => {
                const order = doc.data();
                order.id = Number(doc.id);
                list.push(order);
            });
            return {
                receipts: list.concat(),
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
  margin-bottom: 32px;
  border: solid 1px #E5E5E5;
  width: calc(100% - 32px);
  position: relative;
  left: 16px;
}
div.usual{
    div.order-unit{
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 32px;
        padding-top: 16px;
        padding-left: 16px;
        padding-right: 16px;
        background: #fff;
        border-radius: 16px;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        h4{
            padding-bottom: 8px;
            border-bottom: solid 1px #e5e5e5;
        }
        div.order-item{
            padding-top: 32px;
            padding-bottom: 16px;
            border-bottom: solid 1px #e5e5e5;
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
                    border: 0;
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
                p.order-item-price{
                    padding-top: 16px;
                    border-top: solid 1px #e5e5e5;
                    text-align: left;
                    span{
                        color: #2a2a2a;
                        font-size: 24px;
                        font-weight: 600;
                    }
                }
            }
        }
        div.order-total, div.order-subtotal, div.order-tax{
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            p{
                span{
                    color: #2a2a2a;
                    font-size: 16px;
                    font-weight: lighter;
                }
            }
            &.order-total{
                p{
                    span{
                        font-weight: 600;
                    }
                }
            }
        }
        button.order-item-order{
            margin-top: 16px;
            border: 0;
            border-radius: 12px;
            width: 100%;
            height: 48px;
            background: #2a2a2a;
            text-align: center;
            text-decoration: none;
            line-height: 44px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
            &:focus{ outline: none; }
            &:active{ opacity: 0.4; }
            span{
                color: #fff;
                font-size: 16px;
                font-weight: 600;
            }
        }
        button.order-item-remove{
            margin-top: 8px;
            margin-bottom: 16px;
            border: solid 1px #2a2a2a;
            border-radius: 12px;
            width: 100%;
            height: 48px;
            position: relative;
            background: #fff;
            text-align: center;
            text-decoration: none;
            line-height: 44px;
            &:active{opacity: 0.4;}
            &:focus{outline: none;}
            span{
                color: #2a2a2a;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
}
</style>