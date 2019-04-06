<template>
  <div class="header">
    <nuxt-link to="/">
      <img src="~/assets/logo.png" class="logo" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    info() {
      return this.$store.getters['info/info']
    }
  },
  created: function() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$store.dispatch('info/get')
    }
  }
}
</script>

<style scoped>
.header {
  height: 100px;
  padding: 10px;
  background-color: #73d9f7;
  box-shadow: 0 5px 4px gray;
}

.logo {
  height: 80px;
}

.title {
  font-size: 50px;
}
</style>
