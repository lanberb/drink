<template>
  <div
  class="menu">
    <input type="checkbox" id="menu-checkbox">
    <label for="menu-checkbox">
      <div class="hamburger"></div>
      <div class="menu-badge"
      v-if="$store.state.orderlist.items.length != 0">
        <p>
          <span>{{ $store.state.orderlist.items.length }}</span>
        </p>
      </div>
      <nuxt-link
      class="user"
      to="/user">
        <p class="label">
          <span>Account / アカウント</span>
        </p>
        <div class="menu-image-box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" style="fill: #fff"/>
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link
      class="receipt"
      to="/orderlist/thanks">
        <p class="label">
          <span>Last Receipt / 直前のレシート</span>
        </p>
        <div class="menu-image-box">
          <svg viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"/>
            <rect height="2" width="6" x="9" y="7"/>
            <rect height="2" width="2" x="16" y="7"/>
            <rect height="2" width="6" x="9" y="10"/>
            <rect height="2" width="2" x="16" y="10"/>
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link
      class="orderlist"
      to="/orderlist">
        <p class="label">
          <span>Order / 注文リスト</span>
        </p>
        <div class="menu-image-box">
          <svg viewBox="0 0 512 512" >
            <g>
              <path class="st0" d="M491.615,95.732c-5.051-6.18-12.624-9.78-20.622-9.78H123.655l-11.827-40.616l-0.009-0.025
                c-5.434-18.177-20.341-31.939-38.883-35.912L30.487,0.297c-7.2-1.537-14.28,3.039-15.817,10.23
                c-1.536,7.182,3.039,14.271,10.231,15.808l42.449,9.101c9.05,1.935,16.309,8.651,18.958,17.506l77.589,266.549
                c-1.749,0.814-3.43,1.706-5.06,2.674c-8.371,4.984-15.077,11.979-19.577,20.147c-4.296,7.768-6.588,16.564-6.801,25.639h-0.042
                v1.384h0.034c0.178,7.08,1.68,13.89,4.313,20.095c4.194,9.916,11.172,18.313,19.968,24.264c8.796,5.943,19.476,9.433,30.86,9.424
                h249.57c7.361,0,13.32-5.96,13.32-13.312c0-7.352-5.96-13.321-13.32-13.321h-249.57c-3.982,0-7.7-0.79-11.104-2.233
                c-5.102-2.156-9.492-5.79-12.574-10.358c-2.954-4.381-4.686-9.56-4.839-15.231c0.153-6.766,2.309-12.633,6.095-17.327
                c1.97-2.428,4.382-4.551,7.318-6.308c2.904-1.732,6.317-3.098,10.324-3.965l250.86-40.836
                c16.402-2.674,29.426-15.197,32.737-31.472l30.682-150.848v-0.018c0.356-1.748,0.544-3.531,0.536-5.297
                C497.635,106.506,495.537,100.537,491.615,95.732z" style="fill: #fff"></path>
              <path class="st0" d="M218.402,444.785c-5.841-3.964-12.972-6.283-20.546-6.283c-5.043,0-9.907,1.028-14.314,2.896
                c-6.605,2.792-12.191,7.445-16.148,13.303c-3.965,5.841-6.291,12.972-6.283,20.546c0,5.043,1.028,9.908,2.887,14.314
                c2.801,6.606,7.446,12.2,13.304,16.156c5.849,3.956,12.98,6.291,20.554,6.283c5.043,0.008,9.9-1.028,14.305-2.896
                c6.614-2.801,12.2-7.436,16.156-13.295c3.956-5.858,6.283-12.989,6.283-20.562c0-5.043-1.036-9.9-2.887-14.297
                C228.913,454.336,224.269,448.75,218.402,444.785z M211.508,481.02c-1.12,2.64-3.005,4.924-5.382,6.52
                c-2.378,1.604-5.162,2.521-8.269,2.53c-2.072,0-3.99-0.416-5.756-1.163c-2.649-1.112-4.942-3.014-6.538-5.382
                c-1.595-2.378-2.512-5.171-2.521-8.278c0.009-2.072,0.416-3.99,1.163-5.756c1.112-2.649,3.006-4.933,5.382-6.529
                c2.378-1.604,5.162-2.521,8.27-2.53c2.072,0.009,3.99,0.416,5.756,1.163c2.649,1.12,4.933,3.005,6.538,5.382
                c1.596,2.378,2.512,5.162,2.512,8.27C212.663,477.327,212.256,479.246,211.508,481.02z" style="fill: #fff"></path>
              <path class="st0" d="M419.935,444.785c-5.849-3.964-12.973-6.283-20.545-6.283c-5.043,0-9.917,1.028-14.314,2.896
                c-6.605,2.792-12.192,7.445-16.156,13.303c-3.965,5.841-6.292,12.972-6.283,20.546c0,5.043,1.028,9.908,2.895,14.314
                c2.802,6.606,7.438,12.2,13.295,16.156c5.858,3.956,12.99,6.291,20.563,6.283c5.042,0.008,9.898-1.028,14.296-2.896
                c6.614-2.801,12.209-7.436,16.165-13.295c3.956-5.858,6.282-12.989,6.282-20.562c0-5.043-1.036-9.9-2.895-14.297
                C430.437,454.336,425.793,448.75,419.935,444.785z M413.042,481.02c-1.121,2.64-3.014,4.924-5.383,6.52
                c-2.377,1.604-5.162,2.521-8.268,2.53c-2.08,0-4.008-0.416-5.774-1.163c-2.632-1.112-4.924-3.014-6.52-5.382
                c-1.596-2.378-2.522-5.171-2.53-8.278c0-2.072,0.424-3.99,1.163-5.756c1.112-2.649,3.013-4.933,5.374-6.529
                c2.378-1.604,5.179-2.521,8.287-2.53c2.071,0.009,3.989,0.416,5.756,1.163c2.648,1.12,4.924,3.005,6.528,5.382
                c1.596,2.378,2.522,5.162,2.522,8.27C414.196,477.327,413.789,479.246,413.042,481.02z" style="fill: #fff"></path>
            </g>
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link
      class="usual"
      to="/usual">
        <p class="label">
          <span>Usual / いつもの注文</span>
        </p>
        <div class="menu-image-box">
          <svg viewBox="0 0 512 512" x="0px" y="0px">
            <path class="st0" d="M129.2,417.6c0,19.3,15.6,35,35,35H475c19.3,0,35-15.6,35-35v-27.9H129.2V417.6z"/>
            <path class="st0" d="M479.9,59.4H143.1h-11.9c-5.2,0-12.2,0-22.2,0C48.8,59.4,0,108.3,0,168.5c0,60.2,48.9,105.6,109.1,109.1
                c11.6,0.7,21.8-0.5,30.7-3.2c10.2,31.9,29.2,59.8,54.3,80.8h255.2C487.6,323.1,512,274.9,512,221V91.5
                C512,73.8,497.6,59.4,479.9,59.4z M131.2,208.8c-6.6,3.7-14.1,5.9-22.2,5.9c-25.5,0-46.2-20.7-46.2-46.2c0-25.5,20.7-46.2,46.2-46.2
                c8.1,0,15.6,2.3,22.2,5.9V208.8z"/>
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link
      class="home"
      to="/">
        <p class="label">
          <span>Home / ホームへ戻る</span>
        </p>
        <div class="menu-image-box">
          <svg viewBox="0 0 24 24">
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="#2a2a2a"/>
          </svg>
        </div>
      </nuxt-link>
    </label>
  </div>
</template>

<style lang="scss" scoped>
div.menu{
  width: 56px;
  position: fixed;
  top: 64px;
  left: 100%;
  transform: translateX(calc(-100% - 16px));
  z-index: 1;
  filter: drop-shadow( 0 4px 8px rgba(0, 0, 0, 0.2));
  input{
    display: none;
    &:checked + label{
      height: 560px;
      overflow: visible;
      &::before{
        pointer-events: all;
        opacity: 0.9;
      }
      a{
        &.user{
          top: 35%;
          transform: translateY(-100%);
        }
        &.receipt{
          top: 50%;
          transform: translateY(-200%);
        }
        &.orderlist{
          top: 65%;
          transform: translateY(-300%);
        }
        &.usual{
          top: 80%;
          transform: translateY(-400%);
        }
        &.home{
          top: 95%;
          transform: translateY(-500%);
        }
      }
      div.hamburger{
        background: tomato;
        &::before, &::after{
          top: 27.4px;
          left: 12.4px;
          transform: rotate(45deg);
        }
        &::after{
          transform: rotate(135deg);
        }
      }
      div.menu-badge{
        top: calc(65% - 64px);
      }
    }
  }
  label{
    transition: 250ms;
    display: block;
    height: 56px;
    overflow: hidden;
    &::before{
      filter: none;
      content: '';
      transition: 350ms;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: -64px;
      left: calc(-100vw + 72px);
      box-shadow: none;
      background: #000;
      opacity: 0;
      pointer-events: none;
    }
    div.hamburger{
      transition: 250ms;
      border-radius: 8px;
      width: 56px;
      height: 56px;
      position: absolute;
      background: #2a2a2a;
      z-index: 1;
      &::before, &::after{
        content: '';
        transition: 250ms;
        width: 32px;
        height: 2px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
      }
      &::after{top: 60%;}
    }
    div.menu-badge{
      transition: 350ms;
      border-radius: 50%;
      position: absolute;
      top: -8px;
      left: -8px;
      width: 24px;
      height: 24px;
      background: tomato;
      z-index: 2;
      p{
        text-align: center;
        span{
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    a{
      transition: 350ms;
      border-radius: 8px;
      display: block;
      width: 56px;
      height: 56px;
      position: relative;
      top: 0;
      transform: translateY(0%);
      background: #2a2a2a;
      &.home{
        background: #fff;
      }
      p.label{
        width: calc(100vw - 80px);
        position: absolute;
        top: 50%;
        left: calc(-100vw + 72px);
        transform: translateY(-50%);
        text-align: right;
        text-decoration: none;
        span{
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          white-space: nowrap;
        }
      }
      div.menu-image-box{
        width: 24px;
        height: 24px;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        svg{
          width: 100%;
          height: 100%;
          object-fit: contain;
          fill: #fff;
        }
      }
    }
  }
}
</style>