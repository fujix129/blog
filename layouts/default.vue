<template>
  <div>
    <Header />
    <Menu />
    <nuxt/>
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
</style>
