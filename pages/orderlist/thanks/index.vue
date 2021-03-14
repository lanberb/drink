<template>
    <section>
        <div class="head">
            <h1>
                <span>Thank You!</span>
            </h1>
            <p class="description">
                <span>ご注文ありがとうございます！時間が経つと商品が劣化する可能性がございますので、なるべく早め(5~10分目安)に当店にお越しください。商品のお受け取りの際、このアプリで発行されたレシートが必要になります。こちらの画面をスタッフにお見せください。</span>
            </p>
        </div>
        <hr noshade>
        <div class="order-unit">
            <div class="order-item"
            v-for="(item, index) in lastOrder.items"
            :key="'item-' + index">
                <div class="order-item-details">
                    <h4 class="order-item-name">
                        <span>{{ item.name }}</span>
                    </h4>
                    <p class="order-item-data">
                        <span>{{ '個数: ' + lastOrder.items[index].number }}</span>
                        <span>{{ 'サイズ: ' + text.size[lastOrder.items[index].size] }}</span>
                        <span>{{ '注文形態: ' +  text.for[lastOrder.items[index].for] }}</span>
                        <span>{{ (!!lastOrder.items[index].type ? text.type[lastOrder.items[index].type] + ', ' : '') }}</span>
                    </p>
                    <p class="order-item-data">
                        <span>{{ 'トッピング : ' + (!!lastOrder.items[index].topping.length ? lastOrder.items[index].topping.map(i => i.name_ja).reduce((ini, cur) => ini + cur + ', ', '') : 'なし') }}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="thanks-button">
            <button @click="remove">
                <span>Close / レシートを閉じる</span>
            </button>
        </div>
        <p class="receipt">
            <span>次回のご注文までこのレシートは保存されます。レシートは右上のメニューから開けます。</span>
        </p>
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
        remove: function(){
            this.$router.push('/');
        },
    },
    data: function() {
        return {
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
            lastOrder: '',
        }
    },
    asyncData: async function(store){
        const db = firebase.firestore();
        var list = [];
        return db.collection('user').doc(store.store.state.auth.user.uid).collection('order_history').get().then(function(querySnapshot){
            querySnapshot.forEach((doc) => {
                const order = doc.data();
                order.id = Number(doc.id);
                if (list.length == 0) list.push(order);
                if (list[0].id > doc.id) list.push(order);
                if (list[0].id < doc.id) list.unshift(order);
            });
            return {
                lastOrder: list[[0]],
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
    &::before, &::after{
        content: '';
        width: 8px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: repeating-linear-gradient(-45deg,#ff7171 0px, #ff7171 50px, #9fd8df 50px, #9fd8df 100px);
    }
    &::after{
        left: 100%;
        transform: translateX(-100%);
    }
}
div.head{
    padding-top: 144px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 32px;
    h1{
        width: 100%;
        text-align: center;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        span{
            color: #2a2a2a;
            font-size: 48px;
            background: repeating-linear-gradient(-45deg,#ff7171 0px, #ff7171 10px, #9fd8df 10px, #9fd8df 20px);
            background-clip: text;
        }
    }
    p.description{
        width: calc(100% - 64px);
        position: relative;
        left: 32px;
        span{
            color: #2a2a2a;
            font-size: 12px;
            font-weight: lighter;
        }
    }
}
hr{
    display: block;
    width: calc(100% - 64px);
    position: relative;
    left: 32px;
    border: solid 1px #E5E5E5;
}
div.order-unit{
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 16px;
    div.order-item{
        padding-top: 32px;
        padding-bottom: 32px;
        border-bottom: solid 1px #E5E5E5;
        position: relative;
        div.order-item-details{
            width: calc(100% - 32px);
            display: inline-block;
            vertical-align: top;
            position: relative;
            left: 16px;
            h4.order-item-name{
                margin-bottom: 12px;
                word-break: break-all;
                span{
                    color: #2a2a2a;
                    font-size: 24px;
                }
            }
            p.order-item-data{
                margin-bottom: 8px;
                line-height: 16px;
                span{
                    color: #2a2a2a;
                    font-size: 12px;
                    font-weight: lighter;
                }
            }
        }
    }
}
div.thanks-button{
    margin-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;
    button{
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
            font-weight: 600;
        }
    }
}
p.receipt{
    padding-left: 32px;
    margin-bottom: 16px;
    width: calc(100% - 64px);
    text-align: center;
    line-height: 16px;
    span{
        color: #2a2a2a;
        font-size: 12px;
        font-weight: lighter;
    }
}
</style>
