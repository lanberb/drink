<template>
<section>
    <Menu/>
    <div class="item-info">
        <!-- <BreadcrumbList
        :crumbs="crumbs"
        /> -->
        <h2>{{ drink.name }}</h2>
    </div>
    <hr noshade>
    <div class="item-details">
        <div class="item-size">
            <div class="small"
            @click="drink.size = 'small'"
            :class="drink.size == 'small' ? 'item-size-active' : null">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="38.4" viewBox="0 0 32 38.4">
                        <path id="パス_18" data-name="パス 18" d="M94.01,11.264V4.437H91.621L91.347,0H64.673L64.4,4.437H62.01v6.827h2.18l.214,3.473H64L65,31h.4l.457,7.4H90.156l.457-7.4h.4l1-16.264h-.4l.214-3.473h2.18ZM88.027,36.352H67.993L67.663,31H88.357ZM89.36,14.737h-22.7l-.235-3.815H89.6Zm2.4-5.521h-27.5V6.485h2.265L66.8,2.048H89.218l.274,4.437h2.265V9.216Z" transform="translate(-62.01)"/>
                    </svg>
                </div>
                <p class="text">
                    <span>Small / Sサイズ</span>
                </p>
            </div>
            <div class="medium"
            @click="drink.size = 'medium'"
            :class="drink.size == 'medium' ? 'item-size-active' : null">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="44.8" viewBox="0 0 32 44.8">
                        <path id="パス_18" data-name="パス 18" d="M94.01,11.264V4.437H91.621L91.347,0H64.673L64.4,4.437H62.01v6.827h2.18l.214,3.473H64L65,31h.4l.457,7.4H90.156l.457-7.4h.4l1-16.264h-.4l.214-3.473h2.18ZM88.027,36.352H67.993L67.663,31H88.357ZM89.36,14.737h-22.7l-.235-3.815H89.6Zm2.4-5.521h-27.5V6.485h2.265L66.8,2.048H89.218l.274,4.437h2.265V9.216Z" transform="translate(-62.01, -0) scale(1, 1.16)"/>
                    </svg>
                </div>
                <p class="text">
                    <span>Medium / Mサイズ</span>
                </p>
            </div>
            <div class="large"
            @click="drink.size = 'large'"
            :class="drink.size == 'large' ? 'item-size-active' : null">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="51.2" viewBox="0 0 32 51.2">
                        <path id="パス_18" data-name="パス 18" d="M94.01,11.264V4.437H91.621L91.347,0H64.673L64.4,4.437H62.01v6.827h2.18l.214,3.473H64L65,31h.4l.457,7.4H90.156l.457-7.4h.4l1-16.264h-.4l.214-3.473h2.18ZM88.027,36.352H67.993L67.663,31H88.357ZM89.36,14.737h-22.7l-.235-3.815H89.6Zm2.4-5.521h-27.5V6.485h2.265L66.8,2.048H89.218l.274,4.437h2.265V9.216Z" transform="translate(-62.01) scale(1, 1.33)"/>
                    </svg>
                </div>
                <p class="text">
                    <span>Large / Lサイズ</span>
                </p>
            </div>
        </div>
        <hr noshade>
        <div class="item-type">
            <div class="hot"
            @click="drink.type = 'hot'"
            :class="drink.type == 'hot' ? 'item-type-active-hot' : null">
                <div class="icon">
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <g>
                            <path class="st0" d="M392.172,147.731c13.598,34.6-10.914,87.102-45.319,68.762c-25.344-13.528-18.732-38.095,0.471-72.5
                                c27.244-48.843-20.209-82.996-20.209-82.996s-9.013,62.081-60.738,51.402C222.128,103.268,220.306,27.526,239.464,0
                                c-69.092,8.212-79.267,107.563-46.951,144.15c38.864,43.999,31.594,102.649-18.451,100.592
                                c-36.398-1.492-53.231-46.943-33.965-91.712c-65.763,27.213-92.19,109.904-87.338,161.722
                                c3.282,34.805,10.411,76.778,39.633,112.682c51.71,72.099,146.821,104.148,234.237,72.208
                                c84.402-30.84,135.859-111.889,133.065-197.044C459.254,264.197,450.617,186.932,392.172,147.731z M303.452,454.191
                                c-15.326,5.614-31.264,8.377-47.375,8.275c-0.015,0-0.015,0-0.015,0c-43.34-0.259-84.308-21.426-109.542-56.623
                                c-0.565-0.77-1.131-1.524-1.728-2.262c-18.136-22.282-22.925-49.864-25.406-76.338c-1.005-10.748,0.345-24.269,4.145-37.89
                                c14.808,15.694,34.75,24.897,56.702,25.792c1.194,0.054,2.371,0.086,3.534,0.086c34.216,0.204,62.653-17.273,76.048-46.763
                                c4.899-10.756,7.474-22.462,7.867-34.545c0.173-8.314,1.837-25.391,1.837-25.391c0.424,2.34,8.825,29.858,9.531,32.222
                                c3.8,12.978,13.254,31.028,36.682,43.512c10.914,5.841,22.392,8.824,34.091,8.895c13.787,0.079,26.993-3.949,38.534-11.47
                                c3.345,15.671,4.146,30.306,4.255,39.492c0,0.33,0,0.651,0.016,0.974C394.558,380.938,358.725,434.014,303.452,454.191z"></path>
                        </g>
                    </svg>
                </div>
                <p class="text">
                    <span>Hot / ホット</span>
                </p>
            </div>
            <div class="iced"
            @click="drink.type = 'iced'"
            :class="drink.type == 'iced' ? 'item-type-active-iced' : null">
                <div class="icon">
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                        <g>
                            <path class="st0" d="M379.408,223.71c0.74-2.408,1.259-4.916,1.259-7.574c0-4.918-1.445-9.463-3.816-13.39 c10.52-19.436,16.631-41.642,16.631-65.264C393.464,61.551,331.931,0.008,255.991,0c-75.932,0.008-137.473,61.551-137.473,137.482 c-0.01,23.78,6.167,46.124,16.835,65.653c-2.232,3.834-3.602,8.241-3.602,13.001c0,2.537,0.472,4.945,1.158,7.26 c-29.391,30.595-47.587,72.117-47.578,117.934c0,94.266,76.394,170.662,170.66,170.67c94.266-0.008,170.661-76.404,170.679-170.67 C426.67,295.679,408.613,254.286,379.408,223.71z M178.893,60.384c19.779-19.761,46.947-31.928,77.098-31.937 c30.16,0.009,57.328,12.176,77.098,31.937c19.761,19.78,31.928,46.948,31.946,77.098c0,19.122-4.982,36.984-13.63,52.578h-190.81 c-8.649-15.594-13.631-33.456-13.631-52.578C146.964,107.332,159.141,80.163,178.893,60.384z M356.563,441.894 c-25.789,25.761-61.255,41.651-100.573,41.66c-39.317-0.009-74.783-15.899-100.562-41.66 c-25.761-25.78-41.652-61.246-41.652-100.564c0-38.846,15.742-73.764,41.022-99.423c0.999,0.12,1.99,0.305,3.028,0.305h118.527 v81.061c0,8.908,7.213,16.131,16.122,16.131h36.503c8.908,0,16.122-7.223,16.122-16.131v-81.061h9.482 c0.908,0,1.768-0.176,2.658-0.268c25.26,25.659,40.984,60.56,40.984,99.386C398.205,380.648,382.334,416.113,356.563,441.894z"></path>
                            <circle class="st0" cx="206.422" cy="107.091" r="15.408"></circle>
                            <circle class="st0" cx="300.059" cy="107.091" r="15.408"></circle>
                            <path class="st0" d="M210.747,158.114c-0.056-0.186,0-0.371-0.046-0.556c-0.056-0.186-0.194-0.324-0.241-0.509L210.747,158.114z"></path>
                            <path class="st0" d="M210.701,157.558c1.62,4.972,6.528,8.148,11.769,7.352l37.29-5.668c0,0,8.889-17.779-8.89-26.076 l-33.392,12.057C212.413,147.056,209.599,152.335,210.701,157.558z"></path>
                        </g>
                    </svg>
                </div>
                <p class="text">
                    <span>Iced / アイス</span>
                </p>
            </div>
        </div>
        <hr noshade>
        <div class="item-for">
            <div class="here"
            @click="drink.for = 'here'"
            :class="drink.for == 'here' ? 'item-for-active' : null">
                <p class="text">
                    <span>For Here / 店内</span>
                </p>
            </div>
            <div class="togo"
            @click="drink.for = 'togo'"
            :class="drink.for == 'togo' ? 'item-for-active' : null">
                <p class="text">
                    <span>TakeOut / 持ち帰り</span>
                </p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
// import { moldingCrumbs } from '~/plugins/breadcrumbs.js';
import Menu from '~/components/common/Menu.vue';
// import BreadcrumbList from '~/components/common/BreadCrumbList';
export default {
    components: {
        Menu,
        // BreadcrumbList,
    },
    watch: {
        drink: {
            handler: function(value){
                console.log(value);
            },
            deep: true
        }
    },
    data: function(){ 
        return{
            // crumbs: moldingCrumbs(this.$route),
            drink: {
                id: '',
                name: 'カフェラテ',
                size: 'small',
                type: 'hot',
                for: 'here',
                topping: [],
            },
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
    height: 100vh;
}
div.item-info{
    margin-bottom: 32px;
    padding-left: 16px;
    padding-right: 16px;
    width: calc(100% - 56px);
}
hr{
    width: calc(100% - 32px);
    display: block;
    position: relative;
    left: 16px;
    border: solid 1px #E5E5E5;
    position: relative;
}
div.item-details{
    div.item-size{
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 16px;
        padding-right: 16px;
        overflow: scroll;
        white-space: nowrap;
        &::-webkit-scrollbar{
            display: none;
        }
        div.small, div.medium, div.large{
            display: inline-block;
            margin-right: 16px;
            position: relative;
            width: 120px;
            height: 120px;
            border-radius: 20px;
            background: #fff;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
            div.icon{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                svg{
                    fill: #2a2a2a;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    mix-blend-mode: difference;
                    background-blend-mode: difference;
                }
            }
            p.text{
                display: inline-block;
                width: 100%;
                position: relative;
                top: 100%;
                transform: translateY(calc(-100% - 20px));
                text-align: center;
                span{
                    color: #2a2a2a;
                    font-weight: bold;
                    font-size: 10px;
                }
            }
        }
        div.medium{
            div.icon{
                transform: translate(-50%, calc(-50% - 2px));
            }
        }
        div.large{
            div.icon{
                transform: translate(-50%, calc(-50% - 4px));
            }
        }
        div:last-child{
            margin: 0;
        }
        div.item-size-active{
            background: #2a2a2a;
            div.icon{
                svg{
                    fill: #fff;
                }
            }
            p.text{
                span{
                    color: #fff;
                }
            }
        }
    }
    div.item-type{
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 16px;
        padding-right: 16px;
        overflow: scroll;
        white-space: nowrap;
        &::-webkit-scrollbar{
            display: none;
        }
        div.hot, div.iced{
            display: inline-block;
            margin-right: 16px;
            padding-left: 16px;
            position: relative;
            width: 160px;
            height: 64px;
            border-radius: 16px;
            background: #fff;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
            div.icon{
                position: absolute;
                top: 50%;
                transform: translate(0, -40%);
                svg{
                    fill: #2a2a2a;
                    height: 30px;
                    object-fit: contain;
                    mix-blend-mode: difference;
                    background-blend-mode: difference;
                }
            }
            p.text{
                display: inline-block;
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                span{
                    color: #2a2a2a;
                    font-weight: bold;
                    font-size: 12px;
                }
            }
        }
        div:last-child{
            margin: 0;
        }
        div.item-type-active{
            &-hot{background: #F56969;}
            &-iced{background: #69BAF5;}
            &-hot, &-iced{
                div.icon{
                    svg{
                        fill: #fff;
                    }
                }
                p.text{
                    span{
                        color: #fff;
                    }
                }
            }
        }
    }
    div.item-for{
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 16px;
        padding-right: 16px;
        overflow: scroll;
        white-space: nowrap;
        &::-webkit-scrollbar{
            display: none;
        }
        div.here, div.togo{
            display: inline-block;
            margin-right: 16px;
            position: relative;
            width: 160px;
            height: 64px;
            border-radius: 16px;
            background: #fff;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
            p.text{
                display: inline-block;
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                span{
                    color: #2a2a2a;
                    font-weight: bold;
                    font-size: 12px;
                }
            }
        }
        div:last-child{
            margin: 0;
        }
        div.item-for-active{
            background: #2a2a2a;
                p.text{
                span{
                    color: #fff;
                }
            }
        }
    }
}
</style>