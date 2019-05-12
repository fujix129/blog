<template>
  <div>
    <Header />
    <div class="body">
      <div class="container">
        <nuxt/>
      </div>
      <div class="menu">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Header,
    Menu
  }
}
</script>

<style scoped>
html {
  background-color: #fcfcfc;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.body {
  padding: 30px;
  display: flex;
  width: 100%;
  margin: 0 auto;
}

.container {
  width: 70%;
}

.menu {
  width: 30%;
  min-width: 310px;
}
</style>
