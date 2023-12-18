    <main>
    <div class="container">
      <div class="row">
        <div class="name">
          <h1>Adrian Fabisiewicz</h1>
        </div>
      </div>
      <!-- all the links for social media, use for loop and links object -->
      <div class="logo-row"> <!-- Add this div -->
        {#each Object.keys(links) as link}
          <div class="logo-item"> <!-- Add this class -->
            <a href={links[link].link}>
              <img src={links[link].logo} alt={link} width="50px" height="50px">
            </a>
          </div>
        {/each}
      </div> <!-- Close the div -->
    </div>
    </main>

<style>
* {
  box-sizing: border-box;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
}

.name {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5rem;
}

:global(body){
    margin: 3rem;
    padding: 0;
    font: 1rem/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
}

.container {
  background-color: black;
  color: white;
  text-align: center;
  width: 100%;
    height: 100%;
}

.logo-row {
  display: flex;
  justify-content: center;
  gap: 20px; /* Optional: Adds some space between the logos */
}

.logo-item {
  flex: 1;
}

</style>
<script lang="ts">
  interface Link {
    logo: string;
    link: string;
  }
  
  const links: { [key: string]: Link } = {
    "github": {
      logo: 'github-mark-white.png',
      link: 'https://www.github.com/affq'
    },
    "linkedin": {
      logo: 'In-White-128@2x.png',
      link: 'https://www.linkedin.com/in/fabisiewicz/'
    },
    "instagram": {
      logo: 'Instagram_Glyph_White.png',
      link: 'https://www.instagram.com/afabisiewicz/'
    }
  }
  
  </script>