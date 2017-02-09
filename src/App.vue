<template>
  <div id="app">
    <div :class="{'main-content': true, 'with-menu': isMenuOpen}">
      <dg-header />
      <random-stuff />
    </div>
    <dg-secret-menu />
  </div>
</template>

<style>
body, html {
  height: 100%;
  width :100%;
  margin: 0;
  padding:0;
}

body {
  background: #ffffff;
  color: #333333;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.015em;
  line-height: 1.5;
  margin: 0;
}

* {
  box-sizing: border-box;
}

ul, li {
  list-style: none;
  margin: 0;
  padding:0;
}

.main-content {
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
}
.main-content.with-menu {
  transform: translateX(-330px);
}
</style>

<script>
import Header from './components/Header.vue'
import secretMenu from './components/secret-menu.vue'
import randomStuff from './components/random-stuff.vue'

export default {
  name: 'app',
  components: {
    'dg-header': Header,
    'dg-secret-menu': secretMenu,
    'random-stuff': randomStuff
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.isSecretMenuOpen
    }
  }
}
</script>
