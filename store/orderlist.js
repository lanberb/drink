'use strict';
import firebase from '~/plugins/firebase';

export const state = () => ({
  shop: {},
  items: [],
});

export const actions = {
  order({ state, commit }, order) {
    const now = new Date();
    const s = now.getSeconds() + '';
    const mi = now.getMinutes() + '';
    const h = now.getHours() + '';
    const d = now.getDate() + '';
    const mo = (now.getMonth() + 1)  + '';
    const y = now.getFullYear() + '';
    const fullDate = y + (mo > 9 ? mo : '0' + mo) + d + (h > 9 ? h : '0' + h) + (mi > 9 ? mi : '0' + mi) + (s > 9 ? s : '0' + s);
    // 秒まで取得 y + (mo > 9 ? mo : '0' + mo) + d + (h > 9 ? h : '0' + h) + mi + (s > 9 ? s : '0' + s);
    // 秒から時間まで取得 (h > 9 ? h : '0' + h) + mi + (s > 9 ? s : '0' + s);
    // 日付まで取得 y + (mo > 9 ? mo : '0' + mo) + d;

    // 店舗の注文リストに追加
    firebase.firestore().collection('shop').doc(state.shop.id).collection('order_list').doc(fullDate).set(order).then(() => {
      commit('clearItem');
    }).catch((error) => {
      alert('注文にエラーが発生しました。再度ご試行ください。');
      console.error("Error writing document: ", error);
    });

    // ユーザアカウントの注文履歴に追加
    firebase.firestore().collection('user').doc(order.user.uid).collection('order_history').doc(fullDate).set(order).catch((error) => {
      alert('注文にエラーが発生しました。再度ご試行ください。');
      console.error("Error writing document: ", error);
    });
  },
  addUsual({ commit }, order) {
    const now = new Date();
    const s = now.getSeconds() + '';
    const mi = now.getMinutes() + '';
    const h = now.getHours() + '';
    const d = now.getDate() + '';
    const mo = (now.getMonth() + 1)  + '';
    const y = now.getFullYear() + '';
    const fullDate = y + (mo > 9 ? mo : '0' + mo) + d + (h > 9 ? h : '0' + h) + (mi > 9 ? mi : '0' + mi) + (s > 9 ? s : '0' + s);
    // 秒まで取得 y + (mo > 9 ? mo : '0' + mo) + d + (h > 9 ? h : '0' + h) + mi + (s > 9 ? s : '0' + s);
    // 秒から時間まで取得 (h > 9 ? h : '0' + h) + mi + (s > 9 ? s : '0' + s);
    // 日付まで取得 y + (mo > 9 ? mo : '0' + mo) + d;

    // ユーザの【いつもの注文リスト】に追加
    firebase.firestore().collection('user').doc(order.user.uid).collection('order_usual').doc(fullDate).set(order).catch((error) => {
      alert('注文にエラーが発生しました。再度ご試行ください。');
      console.error("Error writing document: ", error);
    });
  },
  removeUsual({ commit }, set) {
    firebase.firestore().collection('user').doc(set.uid).collection('order_usual').doc(set.id).delete().catch((error) => {
      console.error("Error removing document: ", error);
    });
  },
}

export const mutations = {
  addItem: (state, orderlist) => {
    Object.assign(state.shop, orderlist.shop);
    state.items.push(orderlist.item);
  },
  removeItem: (state, i) => {
    state.items.splice(i, 1);
    if (state.items.length === 0) state.shop = new Object(); 
  },
  clearItem: (state) => {
    state.items.splice(0);
    state.shop = new Object(); 
  },
  setUsual: (state, usual) => {
    Object.assign(state.shop, usual.shop);
    state.items = usual.items;
  },
};