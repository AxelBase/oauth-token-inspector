<!-- src/lib/components/TokenInput.svelte -->

<script>
    import { decodeToken } from '../utils/jwt.js';

    export let token = '';
    export let onParse;
    export let onClear;
    export let error = '';

    function handlePaste(event) {
        setTimeout(() => parseToken(), 0); // Delay to allow value update
    }

    function parseToken() {
        const result = decodeToken(token);
        if (result.error) {
            error = result.error;
        } else {
            error = '';
            onParse(result);
        }
    }

    function clear() {
        token = '';
        error = '';
        onClear();
    }
</script>

<div class="mb-3">
    <textarea
        class="form-control"
        rows="3"
        placeholder="Paste your JWT here..."
        bind:value={token}
        on:paste={handlePaste}
    ></textarea>
</div>

<div class="d-flex justify-content-between mb-3">
    <button class="btn btn-primary" on:click={parseToken}>Parse</button>
    <button class="btn btn-secondary" on:click={clear}>Clear</button>
</div>

{#if error}
    <div class="alert alert-warning" role="alert">
        {error}
    </div>
{/if}