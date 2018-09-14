<template>
  <div class="Menu">
    <div class="MenuContainer">
      <h2>プロフィール</h2>
      <p>きなこさんの画像入れる予定</p>
      <!-- APIから取得するようにしたい -->
      <dl>
        <dt>名前</dt><dd>fujix</dd>
        <dt>twitter</dt><dd><a href="https://twitter.com/hyoufk">@hyoufk</a></dd>
        <dt>github</dt><dd><a href="https://github.com/fujix129">@fujix129</a></dd>
      </dl>
    </div>
    <div class="MenuContainer">
      <h2>カテゴリ</h2>
    </div>
    <div class="MenuContainer">
      <h2>月毎の記事</h2>
    </div>
    <div class="MenuContainer Twitter">
      <Twitter />
    </div>
  </div>
</template>

<script>
import Twitter from '~/components/Twitter.vue'

export default {
  components: {
    Twitter
  }
}
</script>

<style scoped>
h2 {
  border-top: solid 1px #cccccc;
  border-bottom: solid 1px #cccccc;
}
dl {
  width:100%;
}
dt {
  float:left;
  clear:left;
  width:30%;
}
dd {
  float:left;
  width:70%;
}
.Menu {
  float: right;
  width: 25%;
}
.MenuContainer {
  width: 80%;
  margin: 10% 10% 30% 10%;
  padding-top: 10%;
}
.Twitter {
  height: 50%;
}
</style>
