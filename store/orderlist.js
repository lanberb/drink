'use strict';
export const state = () => ({
  shop: {},
  items: [],
});
export const mutations = {
  addNumber: (state, data) => {
    const item = state.items[data.index];
    item.number += data.number;
    const priceTopping = item.topping.reduce((sum, el) => {
      return sum + el
    }, 0);
    const priceNumber = priceNumber + item.number;
    item.sumPrice = priceNumber;
  },
  addItem: (state, orderlist) => {
    Object.assign(state.shop, orderlist.shop);
    // // if (state.items.map(item => item.id).includes(orderList.item.id)) {
    // for (let i = 0; i < state.items.length; i++) {
    //   console.log(state.items[i], orderList.item);
    //   console.log(Object.is(state.items[i], orderList.item));
    //   if (Object.is(state.items[i], orderList.item)) {
    //     console.log('商品がかぶってますわ')
    //   }
    // }
    state.items.push(orderlist.item);
    // console.log(state);
  },
};