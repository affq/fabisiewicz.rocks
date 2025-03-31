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
    transition: transform 0.4s ease-out;
}

a:hover{
   background: none;
}

img:hover{
    width: 5vw;
    height: 5vw;
    transform: scale(1.3);
}

@media (prefers-color-scheme: light){
    img{
        filter: brightness(0);
    }
}
</style>