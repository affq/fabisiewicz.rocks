<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SocialCollection from './components/SocialCollection.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>dzień dobry</h1>
      <SocialCollection />
    </div>
  </header>
</template>

<style scoped>
.wrapper{
  text-align: center;
  display: grid;
  place-items: center;
}

h1{
  font-family: monospace;
  font-size: max(8vw, 40px);
  color: #00ffff;
  letter-spacing: 1vw;
}

@media (prefers-color-scheme: light){
  h1{
  color: #6f23b7;
}
}

</style>
