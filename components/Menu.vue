<template>
  <div>

    <div class="MenuContainer">
      <h2>ぷろふぃーる。</h2>
      <img src="~/assets/kinaco.png" class="logo" />
      <dl class="Profileitems">
        <dt>Name</dt><dd>fujix(hyoufk)</dd>
        <dt>twitter</dt><dd><a href="https://twitter.com/hyoufk">@hyoufk</a></dd>
        <dt>github</dt><dd><a href="https://github.com/fujix129">@fujix129</a></dd>
      </dl>
      <p>意識高くはない系プログラマ</p>
      <p>飼い猫のきなこさんのお世話の為に生きてる。</p>
    </div>

    <div class="MenuContainer">
      <h2>最近の。</h2>
      <ul id="example-1">
        <li v-for="n in menuPageCounts()">
          <nuxt-link :to="{path:`/blogs/${menuPages[n - 1].url_title}`}">{{ menuPages[n - 1].title }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="MenuContainer">
      <h2>月毎の。</h2>
      <p>そのうち</p>
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
  },
  computed: {
    menuPages() {
      return this.$store.getters['pages/menuPages']
    }
  },
  created: function() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$store.dispatch('pages/getAll', this.$route.params.page)
    },
    menuPageCounts() {
      if (this.$store.getters['pages/menuPages'].length >= 5) {
        return 5
      }

      return this.$store.getters['pages/menuPages'].length
    }
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
  width:20%;
}
dd {
  float:left;
  width:65%;
}
p {
  margin: 0;
  font-size: 12px;
}

.logo {
  width: 80%;
  border-radius: 30px;
  margin-left: 10%;
  margin-right: 10%;
}

.MenuContainer {
  padding: 10px;
  margin: 10px 10px 10px 10px;
  border: solid 1px #cccccc;
  border-radius: 10px;
}
</style>
