<template>
  <section class="container">
    <div>
      <h2>{{ pages.title }}</h2>
      <p>{{ pages.text }}</p>
    </div>
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
</style>
