<main>
<div class="container">
  <div class="row">
    <div class="name">
      <h1>Adrian <span class="head-surname">Fabisiewicz</span></h1>
    </div>
  </div>
  <div class="logo-row">
    {#each Object.keys(links) as link}
      <div class="logo-item">
        <a href={links[link].link}>
          <img src={links[link].logo} class="logo-img" alt={link}>
        </a>
      </div>
    {/each}
  </div>
</div>
</main>
<footer>
  <p>2024</p>
</footer>

<svelte:head>
  <title>Adrian Fabisiewicz</title>
</svelte:head>

<style>
@media (max-width: 432px) {
  .logo-row {
    flex-direction: column;
  }

  .name {
    margin-bottom: 1rem;
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;
  }

  .head-surname {
    color: #dca2e8;
  }

  .logo-item {
    flex: 1;
    margin: 40px 10px;
  }

  .container {
  background-color: black;
  color: #ffffff;
  text-align: center;
  width: 100%;
}
}

::selection {
  background: #dca2e8;
  color: black;
}

* {
  box-sizing: border-box;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

:global(body), :global(html){
    margin:0.5rem;
    font: 1rem 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #dca2e8;
    height: 100%;
}

.logo-row {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (min-width: 432px){
  .logo-item {
  flex: 1;
  margin: 0 10px;
}

.container {
  background-color: black;
  color: white;
  text-align: center;
  width: 100%;
  padding: 2rem;
}

.name {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
}

.logo-img {
  transition: transform 0.2s ease-in-out;
  width: 100%;
  max-width: 3.4rem;
}

.head-surname {
  color: #dca2e8;
}

footer {
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 0.7rem;
}

</style>
<script lang="ts">
  import { inject } from '@vercel/analytics'

  interface Link {
    logo: string;
    link: string;
  }
  
  const links: { [key: string]: Link } = {
    "github": {
      logo: 'github-mark-white.png',
      link: 'https://www.github.com/affq'
    },
    "instagram": {
      logo: 'Instagram_Glyph_White.png',
      link: 'https://www.instagram.com/afabisiewicz/'
    },
    "linkedin": {
      logo: 'In-White-128@2x.png',
      link: 'https://www.linkedin.com/in/fabisiewicz/'
    }
  }
  
  </script>
