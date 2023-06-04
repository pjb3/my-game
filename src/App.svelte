<script>
  let name = null
  let nameEntered = false
</script>

<main>
  <h1>My Game</h1>
  {#if nameEntered && name}
    <p>Hello, {name}!</p>
    <button type="button" on:click={() => nameEntered = false}>
      Change name
    </button>
  {:else}
    <form on:submit|preventDefault={() => nameEntered = true}>
      <label>
        What is your name?
        <input bind:value={name} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  {/if}
</main>

<style>
  button {
    margin-top: 1rem;
  }
</style>