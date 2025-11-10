<!-- src/lib/components/ThemeToggle.svelte -->

<script>
    let isDark = false;

    function toggleTheme() {
        isDark = !isDark;
        document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
    }
</script>

<button class="btn btn-outline-secondary" on:click={toggleTheme}>
    {#if isDark}
        ☀️ Light Mode
    {:else}
        🌙 Dark Mode
    {/if}
</button>

<style>
    /* No additional styles needed; relies on Bootstrap data-bs-theme */
</style>