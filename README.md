# Drink! 
![Drink!](static/guide/drink1.pngg "サンプル")
リンクはこちら [https://arcane-peak-42204.herokuapp.com/](https://arcane-peak-42204.herokuapp.com/)

## 概要
#### 【コンセプト】「いつもの一杯をもっとスマートに。生活のひとときをシームレスに✨」  
新型コロナウィルス感染症の拡大によって多くの飲食店が経営に打撃を受けています。レジという障壁を取り払うことで、人件費の削減やお客様との非接触を実現し、より安全で効率的に様々な中小店舗がサービス提供できる世の中をイメージして開発しました。  
#### 【ターゲット】  
個人ターゲット: 毎朝カフェで朝食をとるサラリーマン, 外出中の暇つぶしに「カフェ」をよく選ぶ10代~20代の学生  
法人ターゲット: 売上を考慮して人件費の削減等を強いられている中小カフェ 
#### 【期間/チーム】
デザイン: 1週間  
開発: 2週間半  
担当: UIデザイン, UX設計, フロントエンド開発, バックエンド開発

## このアプリでできること
1. **商品を注文したら、後は店舗で受け取るだけ🍸**  
スマホで好きなカフェの好きな飲み物をカスタマイズ&注文。近年のカフェで多く見られる種類豊富なオプションやトッピングをタップ1つで利用することができます。
2. **｢いつもの一杯」をもっと手軽に🍵**  
いつものお店で注文する一杯をもっと手軽にしませんか？あなたのお気に入りの注文セットを【いつもの注文】に登録できます。

## 機能一覧

**【Auth / 認証系】**  
* 新規アカウント登録(メールアドレス&パスワード)  
* 既存メールアドレス認証(ゲスト認証)  

**【Home / 店舗一覧】**  
* 登録店舗の一覧表示  
* 店舗の混雑状況を表示

**【Shop / 個別店舗表示】**  
* 飲み物, お食事, アメニティグッズの3種でメニューを表示
* 商品サムネイルをFireStoreから取得&表示

**【Item / 単体商品ページ】**  
* サイズ, 個数, アイスかホットか, 店内か持ち帰りかをそれぞれワンタップで選択できる
* 店舗が登録したオプション(トッピング)を自由に好きなだけ追加できる
* ユーザの操作に応じて商品金額を自動で計算
* その場で注文リストに追加できる

**【Orderlist / 注文リスト】**  
* 小計と合計(税含む)を自動で合計
* ユーザごとの『いつもの注文リスト』にカートを登録
* 決済(今回は注文情報をFireStoreに送るのみ)

**【User / ユーザー情報】**
* ゲストログイン以外の場合、ユーザの名前の変更が可能

**【Usual / いつもの注文】**
* ユーザデータに含まれる注文セットを表示
* ワンタップで店舗&商品情報を注文リストに追加

## 工夫点
* 機能過多よりユーザの行動が迷子になってしまうことを防止するためにページごとに機能を分散
* 機能を認識しやすいようSVGアイコンを多用し、視認しやすいように余白を明確に取ることで文字やアイコンの視認性を向上

## 改善点 / 懸念点
* 決済機能の導入(Stripeなど)
* ユーザの迷子を防止にページ数を増やしたが、ページ自体が多すぎないか？ユーザが機能を使うまでに辟易としてしまわないか？  
→ 改善方法: ページ間のアクセスをよりスムーズにして、ユーザがもっと気軽に機能を使えるUIを導入する  
→ 改善手段: ❌右上にハンバーガーメニューを置く → ⭕画面下部にメニューバーを表示する
* 画面のリロードでログインが解除される(Nuxt.jsのSSRモードでのみ起こる…？)  
→ 改善方法: ログイン情報をLocal StorageかCookieに保存する  
→ 改善手段: ログイン時に情報をローカルに保存、アプリ開始時に自動ログイン機能をさせる