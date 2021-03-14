<template>
<section>
    <div class="authview">
        <div class="controller">
            <div class="view-welcome" 
            v-if="state == ''">
                <h1 class="app-title" 
                v-if="state == ''">
                    <span>Drink!</span>
                </h1>
                <p class="description">
                    <span>サインインして始めましょう</span>
                </p>
                <button class="signUp" @click="state = 'signup'">
                    <p>
                        <span>Sign Up / 新規登録</span>
                    </p>
                </button>
                <button class="signIn" @click="state = 'signin'">
                    <p>
                        <span>Sign In / 既存アカウントでログイン</span>
                    </p>
                </button>
                <button class="guestIn" @click="$store.dispatch('auth/signin', {email: guest.email, password: guest.password})">
                    <p>
                        <span>Guest / ゲストアカウントでお試し</span>
                    </p>
                </button>
            </div>
            <div class="view-signup"
            v-if="state == 'signup'">
                <p class="description">
                    <span></span>
                </p>
                <p class="description">
                    <span>Name / 氏名</span>
                </p>
                <input type="name" v-model="name" placeholder="John Doe">
                <p class="description">
                    <span>Email / メールアドレス</span>
                </p>
                <input type="email" v-model="email" placeholder="sample@drink.jp">
                <p class="description">
                    <span>Password / パスワード</span>
                </p>
                <input type="password" v-model="password" placeholder="password">
                <button @click="signup">
                    <p>
                        <span>Sign Up / アカウントを登録</span>
                    </p>
                </button>
                <button class="back" @click="state = ''">
                    <p>
                        <span>Back / 戻る</span>
                    </p>
                </button>
            </div>
            <div class="view-signin"
            v-if="state == 'signin'">
                <p class="description">
                    <span>メールアドレスとパスワードを入力してください</span>
                </p>
                <input type="email" v-model="email" placeholder="XXX@XXX.jp">
                <input type="password" v-model="password" placeholder="XXXXXXXX">
                <button @click="signin">
                    <p>
                        <span>Sign In / サインイン</span>
                    </p>
                </button>
                <button class="back" @click="state = ''">
                    <p>
                        <span>Back / 戻る</span>
                    </p>
                </button>
            </div>
        </div>
        <Footer/>
    </div>
</section>
</template>

<script>
import Footer from '~/components/common/Footer.vue';
export default {
    components: {
        Footer,
    },
    methods: {
        signin: function(){
            if (!!this.email && !!this.password) {
                this.$store.dispatch('auth/signin', {email: this.email, password: this.password});
            } else {
                alert('メールアドレスとパスワードのどちらかが入力されていません')
            }
        },
        signup: function(){
            if (!!this.email && !!this.password && !!this.name) {
                this.$store.dispatch('auth/signup', {email: this.email, password: this.password, name: this.name});
            } else {
                alert('メールアドレスとパスワードのどちらかが入力されていません')
            }
        },
    },
    data: function(){
        return {
            guest: {
                email: process.env.GUEST_MailAddress,
                password: process.env.GUEST_Password,
            },
            state: '',
            email: 'lanberb.1@gmail.com',
            password: 'note10969',
            name: '佐々木尚',
        }
    },
    mounted: function(){
        // if (!!firebase.auth().currentUser) this.$router.push('/');
        this.$store.dispatch('auth/signOut');
    },
}
</script>

<style lang="scss" scoped>
div.controller{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1;
    background: repeating-linear-gradient(-45deg, #f0e4d7, #f0e4d7 50px, #f5c0c0 50px, #f5c0c0  100px, #ff7171 100px, #ff7171 150px, #9fd8df 150px, #9fd8df 200px);
    // background: repeating-linear-gradient(-45deg,#ff7171 0px, #ff7171 50px, #9fd8df 50px, #9fd8df 100px);
    // background: white;
    // background: url('~/static/image/sample/coffee.jpg');
    background-size: cover;
    button{
        margin-bottom: 8px;
        padding: 0;
        border: 0;
        border-radius: 16px;
        width: 100%;
        height: 56px;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        &:active{opacity: 0.4;}
        &:focus{outline: none;}
        background: #2a2a2a;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        p{
            line-height: 56px;
            span{
                color: #fff;
                font-size: 16px;
                font-weight: 600;
            }
        }
        &.guestIn{
            background: #fff;
            p{
                span{
                    color: #2a2a2a;
                }
            }
        }
    }
    button.back{
        margin-bottom: 8px;
        padding: 0;
        border: 0;
        border-radius: 16px;
        width: 100%;
        position: relative;
        left: 50%;
        transform: translate(-50%, 0);
        &:active{opacity: 0.4;}
        &:focus{outline: none;}
        background: transparent;
        filter: none;
        p{
            text-decoration: underline;
            line-height: 56px;
            span{
                color: #2a2a2a;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
    div.view-welcome{
        width: 320px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1{
            margin-top: 96px;
            margin-bottom: 96px;
            text-align: center;
            letter-spacing: 4px;
            // background: repeating-linear-gradient(-45deg,#ff7171 0px, #ff7171 50px, #9fd8df 50px, #9fd8df 100px);
            // background-clip: text;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
            span{
                // color: transparent;
                color: #fff;
                font-size: 64px;
                font-family: 'Oleo Script';
            }
        }
        p.description{
            padding: 16px;
            border-radius: 8px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.6));
            text-align: center;
            span{
                color: #fff;
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
    div.view-signup{
        width: 320px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p.description{
            border-radius: 8px;
            filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.4));
            span{
                color: #2a2a2a;
                font-size: 16px;
                font-weight: 600;
            }
        }
        input{
            display: block;
            margin-bottom: 16px;
            padding: 16px;
            border: 0;
            border-radius: 16px;
            width: calc(100% - 32px);
            height: 24px;
            background: #fff;
            font-size: 16px;
            font-weight: lighter;
            &:focus{outline: none;}
        }
    }
    div.view-signin{
        width: 320px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p.description{
            padding: 16px;
            border-radius: 8px;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
            text-align: center;
            span{
                color: #fff;
                font-size: 16px;
                font-weight: 600;
            }
        }
        input{
            display: block;
            margin-bottom: 16px;
            padding: 16px;
            border: 0;
            border-radius: 16px;
            width: calc(100% - 32px);
            height: 24px;
            background: #fff;
            font-size: 16px;
            font-weight: lighter;
            &:focus{outline: none;}
        }
    }
}
</style>