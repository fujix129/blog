<template>
  <div class="header">
    <p class="title">{{ info.title }}</p>
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
  background-color: #0bc20b;
  box-shadow: 0 5px 4px gray;
}

.title {
  font-size: 30px;
}
</style>
