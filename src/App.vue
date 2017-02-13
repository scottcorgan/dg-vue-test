<script>
import Header from './components/Header.vue'
import secretMenu from './components/secret-menu.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-secret-menu': secretMenu
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.isSecretMenuOpen
    }
  }
}
</script>

<template>
  <div id="app">
    <main :class="{'main-content': true, 'with-menu': isMenuOpen}">
      <app-header />
    </main>
    <app-secret-menu />
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

#app {
  height: 100%;
}

.main-content {
  background-color: #fff;
  height: 100%;
  transition: transform 0.2s ease-in-out;
}
.main-content.with-menu {
  transform: translateX(-330px);
}
</style>
