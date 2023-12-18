<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<div>
    {i}
    <button on:click={addOne}>dodaj jeden</button>
</div>

<script>
    let i = 0;
    const addOne = () => {
        i++;
        console.log(i);
    }
</script>