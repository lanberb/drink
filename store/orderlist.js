'use strict';
export const state = () => ({
  shop: {
    id: '',
    name: '',
  },
  items: [],
});
export const mutations = {
  addItem: (state, orderList) => {
    state.items.push(orderList);
    console.log(state.items);
  },
  displayLog: (state, n) => {
    console.log(n)
  },
  setShopData: (state, shopData) => {
    
  }
};