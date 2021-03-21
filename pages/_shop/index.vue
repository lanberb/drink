<template>
<section>
    <div class="thumbnail">
      <img :src="shopThumbnail" alt="shop-thumbnail">
    </div>
    <div class="shop-info">
      <p class="shop-title">
        <span>{{ shop.name_ja }}</span>
      </p>
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
    </div>
    <div class="shop-ordertypes">
      <div
      @click="ordertype = 'drink'"
      :class="ordertype == 'drink' ? 'ordertype-active' : null"
      class="drink">
        <div class="icon">
          <svg x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path d="M479.3,335.9c20.8-28,32.7-64.9,32.7-110.4V103.3c0-24.7-20-44.8-44.8-44.8c0,0-85.1,0-171.4,0
              c-86.3,0-173.7,0-178.4,0C52.6,58.5,0,111,0,175.9c0,32.4,13.3,61.2,34.5,81.9c21.2,20.7,50.3,33.6,82,35.5
              c2.3,0.1,4.5,0.2,6.6,0.2c4.8,0,9.3-0.3,13.7-0.9c11.1,27.6,28.8,51.8,51.3,70.6l-0.3-0.3l0.3,0.2c0.7,0.6,1.6,1.3,2.5,2h-67V406
              c0,26.2,21.3,47.5,47.5,47.5h293.2c26.2,0,47.5-21.3,47.5-47.5v-40.9h-61.2C461.3,356.8,471,347.1,479.3,335.9z M482.8,394.2V406
              c0,10.2-8.3,18.4-18.4,18.4H171.2c-10.2,0-18.4-8.3-18.4-18.4v-11.8H247h147.9H482.8z M389.9,365.1H252.1
              c-11.8-4.3-21.7-9.2-29.3-13.5c-8.1-4.6-13.7-8.8-15.8-10.7l0.2,0.1l-0.2-0.2c-21.6-18-37.9-42.1-46.7-69.5l-4.4-13.5l-13.6,4
              c-5.5,1.6-11.7,2.6-19,2.6c-1.6,0-3.3,0-5-0.1c-24.9-1.4-47.3-11.5-63.3-27.2c-16-15.7-25.8-36.7-25.8-61.1
              c0-24.4,9.9-46.4,25.9-62.4c16-16,38-25.9,62.4-25.9c9.4,0,349.8,0,349.8,0c8.7,0,15.7,7,15.7,15.7v122.2c0,40.6-10.3,70.6-27,93.1
              C439.7,340.4,417,355.6,389.9,365.1z"/>
            <path d="M122.7,122.2C93,122.2,69,146.2,69,175.9c0,29.7,24.1,53.7,53.7,53.7c9.6,0,18.4-2.7,25.8-6.8l6.3-3.5v-86.9
              l-6.3-3.4C141.1,124.9,132.3,122.1,122.7,122.2z M130.6,204.2c-2.5,0.8-5.2,1.2-7.9,1.2c-16.3,0-29.5-13.2-29.5-29.5
              c0-16.3,13.2-29.5,29.5-29.5c2.7,0,5.3,0.5,7.9,1.2V204.2z"/>
          </g>
          </svg>
        </div>
        <p class="text">
          <span>Drink / 飲み物</span>
        </p>
      </div>
      <div
      @click="ordertype = 'meals'"
      :class="ordertype == 'meals' ? 'ordertype-active' : null"
      class="meal">
        <div class="icon">
          <svg x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path class="st0" d="M243.209,77.524c-0.905-11.667-1.794-22.265-2.552-30.556c-0.383-4.15-0.734-7.736-1.011-10.574
              c-0.294-2.878-0.514-4.965-0.702-6.326c-0.399-3.163-1.19-6.367-2.47-9.457c-1.867-4.606-4.794-9.147-9.188-12.669
              c-2.193-1.728-4.77-3.22-7.59-4.223c-2.821-1.01-5.886-1.516-9.058-1.516c-0.032,0-0.057-0.033-0.082-0.033
              c-4.125,0-8.136,0.848-11.715,2.47c-5.364,2.414-9.652,6.506-12.416,11.364c-2.797,4.819-4.15,10.378-4.15,16.069v93.315
              c0,1.704-0.244,2.804-0.489,3.521c-0.163,0.506-0.35,0.783-0.489,0.946c-0.187,0.244-0.301,0.359-0.725,0.538
              c-0.416,0.195-1.174,0.392-2.339,0.392c-0.514,0-0.807-0.09-1.134-0.229c-0.432-0.188-0.872-0.538-1.223-1.109
              c-0.358-0.538-0.603-1.271-0.603-2.16v-0.041l-0.4-96.902c0-4.402-0.872-8.593-2.494-12.343
              c-2.414-5.633-6.424-10.19-11.202-13.256C156.384,1.68,150.824,0,145.076,0c-5.748,0-11.308,1.68-16.11,4.745
              c-4.769,3.066-8.788,7.623-11.202,13.256c-1.622,3.75-2.494,7.941-2.494,12.343l-0.4,96.902v0.041c0,0.889-0.244,1.622-0.604,2.16
              c-0.35,0.571-0.782,0.921-1.214,1.109c-0.326,0.139-0.628,0.229-1.141,0.229c-1.158,0-1.924-0.196-2.332-0.392
              c-0.432-0.18-0.538-0.294-0.734-0.538c-0.13-0.163-0.318-0.44-0.489-0.946c-0.236-0.717-0.481-1.817-0.481-3.521V32.072
              c0-5.69-1.362-11.25-4.158-16.069c-2.756-4.859-7.044-8.951-12.416-11.364c-3.579-1.622-7.59-2.47-11.708-2.47
              c-0.024,0-0.057,0.033-0.089,0.033c-3.163,0-6.237,0.506-9.05,1.516c-2.829,1.003-5.397,2.495-7.59,4.223
              c-4.394,3.522-7.329,8.063-9.196,12.669c-1.28,3.09-2.063,6.294-2.47,9.457c-0.188,1.362-0.4,3.448-0.701,6.326
              c-0.27,2.838-0.628,6.424-1.003,10.574c-0.766,8.292-1.655,18.89-2.552,30.556c-1.786,23.324-3.498,50.815-3.856,72.566
              c0,0.668-0.024,1.321-0.024,2.005c-0.025,22.607,6.294,40.698,15.481,54.117c9.172,13.452,20.993,22.208,31.869,27.279
              c4.793,2.226,8.919,5.74,11.821,10.061c2.903,4.337,4.55,9.432,4.582,15.131l-3.775,219.354v0.603
              c0,8.723,3.416,17.137,9.547,23.382c6.294,6.392,14.862,9.963,23.805,9.963h8.683h8.682c8.935,0,17.512-3.571,23.798-9.963
              c6.131-6.244,9.547-14.659,9.547-23.382v-0.603l-3.767-219.354c0.024-5.7,1.68-10.794,4.582-15.131
              c2.902-4.321,7.019-7.835,11.821-10.061c10.868-5.07,22.689-13.827,31.86-27.279c9.188-13.419,15.514-31.51,15.482-54.117
              c0-0.684-0.024-1.337-0.024-2.005C246.698,128.339,244.994,100.848,243.209,77.524z M214.593,194.612
              c-6.832,10.02-15.694,16.541-23.536,20.178c-8.186,3.815-15.237,9.782-20.276,17.316c-5.046,7.541-8.055,16.729-8.055,26.602v0.09
              l3.767,219.598v0.245c0,3.334-1.304,6.555-3.652,8.952c-2.388,2.438-5.674,3.783-9.082,3.783h-8.682h-8.683
              c-3.415,0-6.693-1.345-9.082-3.783c-2.356-2.397-3.66-5.618-3.66-8.952v-0.245l3.766-219.598v-0.09
              c0-9.872-3.008-19.061-8.046-26.602c-5.047-7.534-12.098-13.501-20.284-17.316c-7.843-3.636-16.705-10.158-23.536-20.178
              c-6.8-10.061-11.83-23.651-11.879-42.516c0-0.579,0.024-1.117,0.024-1.688c0.571-36.71,5.349-92.597,7.297-111.959
              c0.302-2.739,0.514-4.778,0.652-5.74c0.277-2.291,1.035-4.533,2.014-6.188c1.003-1.655,2.055-2.6,3.114-3.139
              c0.734-0.342,1.517-0.57,2.821-0.57h0.025c1.378,0,2.388,0.228,3.22,0.62c0.823,0.375,1.492,0.864,2.152,1.598
              c1.247,1.386,2.275,3.824,2.275,7.044v93.315c0,4.06,0.652,7.957,2.12,11.544c1.427,3.603,3.791,6.84,6.742,9.188
              c1.957,1.606,4.174,2.828,6.456,3.66c3.041,1.142,6.213,1.614,9.327,1.614c3.334,0,6.588-0.717,9.49-1.989
              c2.878-1.304,5.446-3.146,7.542-5.365c4.174-4.484,6.53-10.451,6.53-16.753l0.407-96.893v-0.049c0-1.712,0.326-3.066,0.816-4.231
              c0.513-1.142,1.19-2.12,2.062-2.927c1.68-1.663,4.085-2.609,6.319-2.576c2.226-0.032,4.631,0.914,6.318,2.576
              c0.864,0.807,1.541,1.785,2.055,2.927c0.489,1.166,0.823,2.519,0.823,4.231v0.049l0.4,96.893c0,6.302,2.356,12.27,6.538,16.753
              c2.087,2.218,4.664,4.061,7.541,5.365c2.894,1.272,6.155,1.989,9.482,1.989c3.122,0,6.294-0.472,9.326-1.614
              c2.283-0.832,4.509-2.054,6.458-3.66c2.951-2.348,5.315-5.585,6.75-9.188c1.468-3.587,2.12-7.484,2.12-11.544V32.072
              c0-3.22,1.027-5.658,2.274-7.044c0.653-0.734,1.329-1.223,2.145-1.598c0.84-0.392,1.842-0.62,3.228-0.62h0.024
              c1.296,0,2.08,0.228,2.812,0.57c1.069,0.538,2.12,1.484,3.123,3.139c0.978,1.654,1.736,3.897,2.005,6.188
              c0.138,0.962,0.359,3,0.652,5.74c1.957,19.362,6.726,75.249,7.296,111.959c0,0.571,0.034,1.109,0.034,1.688
              C226.422,170.961,221.401,184.551,214.593,194.612z"></path>
            <path class="st0" d="M437.445,40.502c-9.49-11.576-20.602-20.74-32.603-27.05c-12-6.31-24.923-9.759-37.894-9.768
              c-12.954,0.008-25.884,3.457-37.877,9.768c-18.009,9.473-34.004,25.338-45.532,46.193c-11.536,20.87-18.563,46.779-18.563,76.365
              c0,23.447,7.06,43.763,16.11,59.914c9.074,16.175,20.096,28.29,28.713,35.92c3.873,3.424,7.134,6.278,9.718,8.716
              c1.94,1.826,3.489,3.424,4.672,4.842c1.785,2.144,2.739,3.775,3.408,5.633c0.66,1.851,1.092,4.126,1.1,7.64l-3.775,219.362v0.594
              c-0.007,8.731,3.433,17.129,9.547,23.374l0.017,0.016c6.268,6.376,14.846,9.979,23.797,9.979h17.341
              c8.959,0,17.536-3.603,23.814-9.979c6.122-6.244,9.555-14.659,9.555-23.39l-0.008-0.594l-3.767-219.371
              c0.008-3.114,0.351-5.266,0.889-6.995c0.391-1.304,0.912-2.413,1.679-3.652c1.141-1.818,2.944-3.93,5.674-6.571
              c2.715-2.624,6.294-5.748,10.647-9.604c8.634-7.63,19.64-19.746,28.722-35.92c9.05-16.15,16.11-36.467,16.11-59.914
              C468.946,96.552,456.432,63.672,437.445,40.502z M434.843,185.855c-7.68,13.737-17.34,24.344-24.384,30.565
              c-3.798,3.35-7.158,6.277-10.215,9.147c-2.282,2.168-4.394,4.304-6.326,6.619c-2.903,3.44-5.389,7.387-7.003,11.895
              c-1.63,4.509-2.307,9.392-2.307,14.626v0.09l3.774,219.598v0.236c0,3.342-1.312,6.555-3.661,8.944
              c-2.388,2.446-5.666,3.816-9.098,3.816h-17.341c-3.424,0-6.701-1.37-9.098-3.816c-2.348-2.397-3.661-5.608-3.661-8.944l0.008-0.22
              v-0.017l3.767-219.598v-0.09c0.007-4.655-0.53-9.025-1.802-13.109c-0.938-3.066-2.282-5.927-3.913-8.519
              c-2.462-3.914-5.462-7.191-8.788-10.428c-3.343-3.236-7.068-6.456-11.333-10.231c-7.06-6.221-16.721-16.828-24.392-30.565
              c-7.704-13.77-13.492-30.58-13.492-49.845c0.008-35.105,11.096-63.223,26.821-82.439c7.876-9.611,16.901-16.965,26.26-21.882
              c9.358-4.916,19.012-7.394,28.289-7.394c9.294,0,18.939,2.478,28.306,7.394c14.03,7.37,27.336,20.26,37.086,37.934
              c9.751,17.65,15.988,40.062,15.988,66.386C448.328,155.274,442.556,172.085,434.843,185.855z"></path>
          </g>
          </svg>
        </div>
        <p class="text">
          <span>Meals / お食事</span>
        </p>
      </div>
      <div
      @click="ordertype = 'goods'"
      :class="ordertype == 'goods' ? 'ordertype-active' : null"
      class="goods">
        <div class="icon">
          <svg x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path class="st0" d="M0,60v392h512v-16V60H0z M32,92h448v328H32V92z"></path>
            <path class="st0" d="M368.973,156.61c0-15.282-12.383-27.664-27.672-27.664c-15.278,0-27.66,12.382-27.66,27.664
              c0,11.297,6.777,20.961,16.461,25.266c0,11.461,0,23.531,0,28.414c-0.008,20.5-8.278,38.954-21.703,52.398
              C294.953,276.117,276.5,284.39,256,284.39s-38.954-8.274-52.398-21.703c-13.426-13.445-21.695-31.898-21.703-52.398v-28.414
              c9.687-4.305,16.465-13.969,16.465-25.266c0-15.282-12.386-27.664-27.664-27.664c-15.289,0-27.672,12.382-27.672,27.664
              c0,11.297,6.778,20.969,16.473,25.266v28.414c0.004,53.305,43.199,96.493,96.5,96.508c53.301-0.008,96.496-43.203,96.5-96.508
              c0-4.882,0-16.953,0-28.414C362.195,177.578,368.973,167.906,368.973,156.61z"></path>
          </g>
          </svg>
        </div>
        <p class="text">
          <span>Goods / 販売品</span>
        </p>
      </div>
    </div>
    <hr noshade>
    <div class="shop-ordermenu-empty"
    v-if="!items.length">
      <p>
        <span>商品が見つかりませんでした</span>
      </p>
    </div>
    <div class="shop-ordermenus">
      <nuxt-link class="ordermenu"
      v-for="(order, index) in items"
      :key="order.id"
      :to="{
          name: 'shop-item',
          path: '/shop/:item/',
          params: {
              item: order.itemId,
          },
      }"
      >
        <div class="ordermenu-image">
          <img :src="itemThumbnail[index]" alt="menu">
        </div>
        <p class="ordermenu-title">
          <span>{{ order.name_ja }}</span><br>
          <small>{{ order.name_en }}</small>
        </p>
      </nuxt-link>
    </div>
    <Footer/>
</section>
</template>

<script>
import firebase from '~/plugins/firebase.js';
import Footer from '~/components/common/Footer.vue';
const db = firebase.firestore();
export default {
  components: {
    Footer,
  },
  watch: {
    ordertype: async function(value){
      const itemData = [];
      const shopId = this.$route.params.shop;
      await db.collection('shop').doc(shopId).collection('menu_item').get().then(function(querySnapshot){
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          if (shop.category == value) {
            shop.itemId = doc.id;
            itemData.push(shop);
          }
        });
      }).catch(console.error);
      let itemThumb = [];
      const router = this.$router;
      for (let i = 0; i < itemData.map(i => i.thumbnail).length; i++) {
        await firebase.storage().ref().child('shop/' + this.shop.id + '/itemThumbnail/' + itemData.map(i => i.thumbnail)[i]).getDownloadURL().then(function(res) {
          itemThumb.push(res);
        }).catch(function(error) {
          router.push('/');
        });
      }
      this.items = itemData.concat();
      this.itemThumbnail = itemThumb.concat();
    }
  },
  data: function(){ 
    return{
        ordertype: 'drink',
        shop: '',
        items: '',
        shopThumbnail: '',
        itemThumbnail: '',
    }
  },
  mounted: async function() {
    if (!(!!firebase.auth().currentUser)) this.$router.push('/login');
    let shopThumb = '';
    let itemThumb = [];
    const router = this.$router;
    await firebase.storage().ref().child('shop/' + this.shop.id + '/shopThumbnail/' + Object.values(this.shop.thumbnail)[0]).getDownloadURL().then(function(res) {
      shopThumb = res;
    }).catch(function(error) {
      router.push('/');
    });
    for (let i = 0; i < this.items.map(i => i.thumbnail).length; i++) {
      await firebase.storage().ref().child('shop/' + this.shop.id + '/itemThumbnail/' + this.items.map(i => i.thumbnail)[i]).getDownloadURL().then(function(res) {
        itemThumb.push(res);
      }).catch(function(error) {
        router.push('/');
      });
    }
    this.shopThumbnail = shopThumb;
    this.itemThumbnail = itemThumb.concat();
  },
  asyncData: async function(query){
    var shopData = '';
    var itemsData = [];
    await db.collection('shop').doc(query.params.shop).get().then(function(anshop){
      shopData = anshop.data();
      shopData.id = anshop.id;
    }).catch(console.error);
    await db.collection('shop').doc(query.params.shop).collection('menu_item').get().then(function(querySnapshot){
      querySnapshot.forEach((doc) => {
        const shop = doc.data();
        if (shop.category == 'drink') {
          shop.itemId = doc.id;
          itemsData.push(shop);
        }
      });
    }).catch(console.error);
    return {
      shop: shopData,
      items: itemsData.concat(),
    }
  },
}
</script>

<style lang="scss" scoped>
$font-ja: "Yu Gothic Medium", "游ゴシック Medium", '游ゴシック', "游ゴシック体", 'Yu Gothic', YuGothic, 'メイリオ', 'Meiryo', sans-serif;
*{
  font-family: $font-ja;
}
div.thumbnail{
    margin-bottom: 16px;
    width: 100vw;
    height: 250px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
div.shop-info{
  padding-left: 16px;
  padding-right: 16px;
  div.breadcrumb-list{
    margin-bottom: 16px;
  }
  p.shop-title{
    margin-bottom: 24px;
    color: #2a2a2a;
    span{
      font-weight: 600;
      font-size: 32px;
      line-height: 40px;
    }
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
div.shop-ordertypes{
  padding-top: 36px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
  overflow: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar{
      display: none;
  }
  div.drink, div.meal, div.goods{
    display: inline-block;
    margin-right: 16px;
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 20px;
    background: #fff;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    div.icon{
      width: 32px;
      height: 32px;
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
        font-weight: 600;
        font-size: 10px;
      }
    }
  }
  div:last-child{
    margin: 0;
  }
  div.ordertype-active{
    background: #2a2a2a;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
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
hr{
  width: calc(100% - 32px);
  display: block;
  position: relative;
  left: 16px;
  border: solid 1px #E5E5E5;
  position: relative;
  margin-bottom: 24px;
}
div.shop-ordermenu-empty{
  padding-left: 16px;
  padding-right: 16px;
  height: 160px;
  position: relative;
  p{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #bbb;
    text-align: center;
    span{
      font-size: 16px;
      font-weight: 600;
    }
  }
}
div.shop-ordermenus{
  padding-left: 16px;
  padding-right: 16px;
  a.ordermenu{
    display: inline-block;
    vertical-align: top;
    width: 42.67vw;
    max-width: 320px;
    text-decoration: none;
    color: #2a2a2a;
    @media (max-width: 320px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      &:nth-child(2n - 1){
        margin-right: 16px;
      }
    }
    @media (min-width: 1024px){
      margin-right: 24px;
    }
    div.ordermenu-image{
      margin-right: 0;
      margin-bottom: 16px;
      width: 100%;
      height: 53.33vw;
      @media (max-width: 320px) {
        height: 240px;
      }
      border-radius: 8px;
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    p.ordermenu-title{
      margin-right: 0;
      margin-bottom: 32px;
      width: 100%;
      text-align: center;
      line-height: 20px;
      span{
        font-weight: 600;
        font-size: 16px;
      }
      small{
        display: block;
        margin-top: 4px;
        color: #777;
        font-weight: lighter;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
}
</style>