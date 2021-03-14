<template>
    <nuxt-link 
    class="card-shop"
    :to="{
        name: 'shop',
        path: '/:shop/',
        params: {
            shop: id,
        },
    }">
        <p class="name">
            <span>{{ name }}</span>
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
                <svg viewBox="0 0 512 512">
                    <path class="st0" d="M437.6,351.6V89.9c0-49.6-40.2-89.9-89.9-89.9H164.3c-49.6,0-89.9,40.2-89.9,89.9v261.8
                        c0,37.6,27.4,69,63.3,75.2L81.3,512h50.1l23.1-35h202.9l23.1,35h50.1l-56.4-85.1C410.2,420.6,437.6,389.3,437.6,351.6z M178.2,40.3
                        h155.6v25.9H178.2V40.3z M131.4,124.2c0-11.3,9.1-20.4,20.4-20.4h208.5c11.3,0,20.4,9.2,20.4,20.4v86.2c0,11.3-9.2,20.4-20.4,20.4
                        H151.8c-11.3,0-20.4-9.1-20.4-20.4L131.4,124.2L131.4,124.2z M150.8,374c-13.2,0-23.8-10.7-23.8-23.8c0-13.2,10.7-23.8,23.8-23.8
                        c13.2,0,23.8,10.7,23.8,23.8C174.6,363.3,164,374,150.8,374z M169.6,454.3L187,428h138l17.4,26.3H169.6z M361.2,374
                        c-13.2,0-23.8-10.7-23.8-23.8c0-13.2,10.7-23.8,23.8-23.8c13.2,0,23.8,10.7,23.8,23.8C385,363.3,374.4,374,361.2,374z" style="fill: #4B4B4B;"/>
                </svg>
            </div>
            <p class="label">
                <span>JR仙台駅から徒歩10分(地下歩道からだと5分)</span>
            </p>
        </div>
        <div class="info">
            <div class="seats-available">
                <div class="icon">
                    <svg viewBox="0 0 512 512">
                        <path class="st0" d="M446.328,130.932h-23.145c-19.338,0-35.016,15.678-35.016,35.016v162.62H123.833v-162.62
                            c0-19.338-15.678-35.016-35.017-35.016H65.671c-19.728,0-35.717,15.988-35.717,35.717v225.019
                            c0,19.722,15.988,35.718,35.717,35.718h58.162h264.334h58.161c19.722,0,35.717-15.996,35.717-35.718V166.65
                            C482.045,146.92,466.05,130.932,446.328,130.932z" style="fill: rgb(75, 75, 75);"></path>
                        <polygon class="st0" points="99.923,512 137.85,512 142.298,443.562 95.475,443.562 	" style="fill: rgb(75, 75, 75);"></polygon>
                        <polygon class="st0" points="374.143,512 412.07,512 416.517,443.562 369.694,443.562 	" style="fill: rgb(75, 75, 75);"></polygon>
                        <path class="st0" d="M143.591,153.188v155.615h224.811V153.188c0-23.209,18.812-42.021,42.014-42.021h1.221V74.229
                            C411.636,33.234,378.403,0,337.407,0H174.592c-40.996,0-74.229,33.234-74.229,74.229v36.938h1.214
                            C124.779,111.167,143.591,129.979,143.591,153.188z" style="fill: rgb(75, 75, 75);"></path>
                    </svg>
                </div>
                <p class="label">
                    <span>{{ crowdStatus == 'crowded' ? '空席わずか' : '空席あり' }}</span>
                </p>
            </div>
            <div class="price-drink">
                <div class="icon">
                    <svg viewBox="0 0 512 512">
                    <path class="st0" d="M129.2,417.6c0,19.3,15.6,35,35,35H475c19.3,0,35-15.6,35-35v-27.9H129.2V417.6z" fill="#4b4b4b"/>
                    <path class="st0" d="M479.9,59.4H143.1h-11.9c-5.2,0-12.2,0-22.2,0C48.8,59.4,0,108.3,0,168.5c0,60.2,48.9,105.6,109.1,109.1
                        c11.6,0.7,21.8-0.5,30.7-3.2c10.2,31.9,29.2,59.8,54.3,80.8h255.2C487.6,323.1,512,274.9,512,221V91.5
                        C512,73.8,497.6,59.4,479.9,59.4z M131.2,208.8c-6.6,3.7-14.1,5.9-22.2,5.9c-25.5,0-46.2-20.7-46.2-46.2c0-25.5,20.7-46.2,46.2-46.2
                        c8.1,0,15.6,2.3,22.2,5.9V208.8z" fill="#4b4b4b"/>
                    </svg>
                </div>
                <p class="label">
                    <span>¥350~¥720</span>
                </p>
            </div>
            <div class="price-meal">
                <div class="icon">
                    <svg viewBox="0 0 512 512">
                    <path class="st0" d="M207.103,23.875v109.219c0,7-5.656,12.641-12.625,12.641h-3.375c-6.969,0-12.641-5.641-12.641-12.641V23.375
                        c0-18-12.109-23.375-23.719-23.375s-23.719,5.375-23.719,23.375v109.719c0,7-5.672,12.641-12.641,12.641h-3.375
                        c-6.969,0-12.625-5.641-12.625-12.641V23.875c0-32.219-45.938-31.125-45.938,0.359c0,37.703,0,104.297,0,104.297
                        c-0.219,57.906,13.625,72.953,36.469,91c18.422,14.531,34.156,22.859,34.156,58.953v232.188h55.344V278.484
                        c0-36.094,15.734-44.422,34.156-58.953c22.859-18.047,36.688-33.094,36.469-91c0,0,0-66.594,0-104.297
                        C253.04-7.25,207.103-8.344,207.103,23.875z" style="fill: #4b4b4b"></path>
                    <path class="st0" d="M385.228,34.75c-11.75,32.953-45.578,110.156-47.719,178.344c-3.313,105.844,61.547,90.188,62.703,159.531
                        v138.688h55.078l0.266,0.688c0,0,0-0.281,0-0.688c0-9.266,0-119.625,0-232.203c0-111.359,0-224.797,0-244.359
                        C455.556-5.438,403.524-16.531,385.228,34.75z" style="fill: #4b4b4b"></path>
                    </svg>
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
    props: ['id', 'name', 'crowdStatus'],
}
</script>

<style lang="scss">
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
a.card-shop{
    display: inline-block;
    padding: 20px;
    border-radius: 16px;
    width: calc(100% - 40px);
    background: #fff;
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
        border: solid 1px #E5E5E5;
    }
    div.icon{
        margin-right: 4px;
        position: relative;
        width: 16px;
        height: 16px;
        svg{
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
    div.info{
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