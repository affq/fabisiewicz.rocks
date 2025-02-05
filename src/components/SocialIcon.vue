<script setup>
defineProps({
  name: String,
  logo: String,
  link: String
});
</script>

<template>
<div class="social-link">
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <img :src="logo" :alt="`${name} logo`"/>
    </a>
</div>
</template>

<style scoped>
img{
    width: 4vw;
    height: 4vw;
    min-width: 30px;
    min-height: 30px;
}
</style>