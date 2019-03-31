<template>
  <div class="header">
    <nuxt-link to="/">{{ info.title }}</nuxt-link>
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
  padding: 30px;
  background-color: #73d9f7;
  box-shadow: 0 5px 4px gray;
}

.title {
  font-size: 30px;
}
</style>
