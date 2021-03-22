<template>
  <section>
    <div class="order-info">
        <h2>
            <span>現在の会計リスト</span>
        </h2>
    </div>
    <div class="order-unit">
        <h4>
            <!-- <span>{{ $store.state.orderlist.shop.name }}</span> -->
        </h4>
        <!-- <div class="order-item"
        v-for="(item, index) in $store.state.orderlist.items"
        :key="'item-' + index">
            <div class="order-item-image">
                <img :src="item.thumbnail" alt="item-image">
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
        </div> -->
    </div>
  </section>
</template>

<script>
import firebase from '~/plugins/firebase.js';
export default {
    data: function() {
        return{
            orderlist: '',
        }
    },
    asyncData: async function() {
        var shopData = '';
        var itemData = '';
        var toppingData = [];
        // await db.collection('shop').get().then(function(admin){
        //     console.log(admin);
        // }).catch(console.error);
        // await db.collection('shop').doc(query.params.shop).collection('menu_item').get().then(function(i){
        //     i.forEach((doc) => {
        //         const item = doc.data();
        //         item.id = doc.id;
        //         if (item.id == query.params.item) {
        //             itemData = item;
        //         }
        //     });
        // }).catch(console.error);
        return {
            // shop: shopData,
            item: itemData,
        }
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
    padding-right: 16px;
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
                        font-weight: 600;
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
                    font-weight: 600;
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
                    fill: #2a2a2a;
                }
            }
        }
    }
}
</style>