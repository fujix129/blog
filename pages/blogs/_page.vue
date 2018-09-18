<template>
  <section>
    <h2>{{ pages.title }}</h2>
    <div class="container">
      <p>{{ pages.text }}</p>
    </div>
    <p class="date">{{ pages.created_at }}</p>
  </section>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$store.getters['pages/pages']
    }
  },
  created: function() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      this.$store.dispatch('pages/get', this.$route.params.page)
    }
  }
}
</script>

<style scoped>
.container {
  border: solid 1px;
  border-radius: 10px;
  padding: 20px;
}

.date {
  font-size: 15px;
  text-align: right;
}
</style>
