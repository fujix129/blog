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

<style>
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
  width: 1200px;
  margin: 0 auto;
}

.container {
  margin: 30px;
  width: 740px;
}

.menu {
  width: 400px;
}
</style>
