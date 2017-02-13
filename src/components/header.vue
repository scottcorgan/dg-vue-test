<script>
import logo from './logo.vue'
import staticIcon from './static-icon.vue'
import * as types from '../store/types'

export default {
  components: {
    logo,
    'static-icon': staticIcon
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.isSecretMenuOpen
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit(types.TOGGLE_SECRET_MENU)
    }
  }
}
</script>

<template>
  <header>
    <div class="logo"><logo /></div>
    <nav>
      <ul>
        <li>Articles</li>
        <li>Sermons</li>
        <li>Books</li>
        <li>Features <static-icon type="chevron-down" /></li>
        <li>Donate</li>
      </ul>
    </nav>
    <div class="search">
      <static-icon type="search" />
    </div>
    <div class="burger" @click="toggleMenu()">
      <static-icon type="burger" :open="isMenuOpen" />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  height: 63px;
  align-items: center;
}

nav {
  flex: 1;
  font-size: 15px;
}

nav ul {
  display: flex;
  justify-content: center;
}

nav li {
  padding: 0 16px;
}

svg {
  vertical-align: middle;
}

.logo {
  padding: 0 0 0 24px;
  min-width: 164px;
}
.search {
  margin: 0 16px;
}
.burger {
  cursor: pointer;
  margin: 0 24px 0 16px;
}
</style>
