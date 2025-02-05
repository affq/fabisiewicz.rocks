<script setup>
import SocialIcon from './SocialIcon.vue'
</script>

<template>
    <div class="social-collection">
        <SocialIcon name="github" logo="/github.png" link="https://github.com/affq"></SocialIcon>
        <SocialIcon name="linkedin" logo="/in.png" link="https://www.linkedin.com/in/fabisiewicz"></SocialIcon>
        <SocialIcon name="instagram" logo="/instagram.png" link="https://www.instagram.com/afabisiewicz"></SocialIcon>
        <SocialIcon name="gmail" logo="/gmail.png" link="mailto:adrian@fabisiewicz.rocks"></SocialIcon>
    </div>
</template>

<style scoped>
.social-collection{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 10vw;
    width: 100%;
}
</style>