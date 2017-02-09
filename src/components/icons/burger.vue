<template>
  <svg width="20px" :class="{ 'menu-icon': true, open}" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
      <title>Menu</title>
      <g fill="#aaa">
          <path d="M18.3510005,5 L1.64899946,5 L1,5 L1,6 L1.64899946,6 L18.3510005,6 L19,6 L19,5 L18.3510005,5 L18.3510005,5 Z" class="top"></path>
          <path d="M18.3510005,10 L1.64899946,10 L1,10 L1,11 L1.64899946,11 L18.3510005,11 L19,11 L19,10 L18.3510005,10 L18.3510005,10 Z" class="middle"></path>
          <path d="M18.3510005,15 L1.64899946,15 L1,15 L1,16 L1.64899946,16 L18.3510005,16 L19,16 L19,15 L18.3510005,15 L18.3510005,15 Z" class="bottom"></path>
      </g>
  </svg>
</template>

<style scoped>
  path { transition: transform 0.2s ease-in-out; }

  .top, .bottom, .middle { transition: transform 0.2s ease-in-out; }

  .top { transform: rotate(0deg) translate(0, 0); }
  .bottom { transform: rotate(-0deg) translate(0, 0); }
  .middle { opacity: 1; }

  .open .top { transform: rotate(45deg) translate(5px, -5.5px); }
  .open .bottom { transform: rotate(-45deg) translate(-10.25px, -0.75px); }
  .open .middle { opacity: 0; }
</style>

<script>
export default {
  props: ['open']
}
</script>
