<template>
  <div>

    <div class="MenuContainer">
      <h2>プロフィール</h2>
      <p>きなこさんの画像入れる予定</p>
      <!-- APIから取得するようにしたい -->
      <dl>
        <dt>なまえ</dt><dd>fujix(hyoufk)</dd>
        <dt>twitter</dt><dd><a href="https://twitter.com/hyoufk">@hyoufk</a></dd>
        <dt>github</dt><dd><a href="https://github.com/fujix129">@fujix129</a></dd>
      </dl>
      <p>まだまだペーペーのプログラマ見習い。</p>
      <p>飼い猫のきなこさんのお世話の為に生きてる。</p>
    </div>

    <div class="MenuContainer">
      <h2>最近の。</h2>
      <p>直近の記事</p>
    </div>

    <div class="MenuContainer">
      <h2>月毎の。</h2>
    </div>

    <div class="MenuContainer">
      <h2>カテゴリ毎の。</h2>
    </div>

    <div class="MenuContainer">
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
p {
  font-size: 12px;
}

.MenuContainer {
  width: 80%;
  margin: 10% 10% 10% 10%;
  padding-top: 20px;
  border: solid 1px #cccccc;
  border-radius: 10px;
}
</style>
