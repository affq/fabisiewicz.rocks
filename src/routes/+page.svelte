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