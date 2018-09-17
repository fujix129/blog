<template>
  <div>
    <Header />
    <div class="menu">
      <Menu />
    </div>
    <div class="container">
      <nuxt/>
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

.container {
  padding: 30px;
  width: 75%;
}

.menu {
  float: right;
  min-width: 300px;
  max-width: 300px;
}
</style>
