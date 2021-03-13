<template>
    <section>
        <div class="head">
        <h2>プロフィール情報</h2>
        </div>
        <hr noshade>
        <div class="profile">
            <div class="data">
                <h4>ID / アカウント</h4>
                <input type="text" v-model="profile.id" disabled>
            </div>
            <div class="data">
                <h4>Name / 名前</h4>
                <input type="text" v-model="profile.name" v-bind:disabled="disabled.name">
            </div>
            <div class="data">
                <h4>Email /  メールアドレス</h4>
                <input type="text" v-model="profile.email" disabled>
            </div>
        </div>
        <hr noshade>
        <div class="update">
            <button @click="updateData">
                <span>Update / プロフィールを更新する</span>
            </button>
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
        updateData: function() {
            this.$store.dispatch('auth/userUpdate', {
                id: this.profile.id,
                name: this.profile.name,
                email: this.profile.email,
            });
        }
    },
    data: function(){ 
        return{
            profile: {
                id: !!firebase.auth().currentUser ? firebase.auth().currentUser.uid : '',
                name: !!firebase.auth().currentUser ? firebase.auth().currentUser.displayName : '',
                email: !!firebase.auth().currentUser ? firebase.auth().currentUser.email : '',
            },
            disabled: {
                name: !!firebase.auth().currentUser && (firebase.auth().currentUser.email == process.env.GUEST_MailAddress),
            },
        }
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
div.profile{
    padding-left: 16px;
    padding-right: 16px;
    div.data{
        h4{
            margin-bottom: 8px;
        }
        input{
            display: block;
            padding: 8px;
            border: solid 1px #e5e5e5;
            border-radius: 4px;
            width: calc(100% - 16px);
            background: #fff;
        }
        margin-bottom: 32px;
    }
}
div.update{
    margin-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    button{
        appearance: none;
        margin-bottom: 8px;
        border: 0;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        background: #2a2a2a;
        text-align: center;
        text-decoration: none;
        line-height: 48px;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        &:focus{ outline: none; }
        &:active{ opacity: 0.4; }
        span{
            color: #fff;
            font-size: 16px;
            font-weight: bold;
        }
    }
}
</style>