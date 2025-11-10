<!-- src/lib/components/CopyButton.svelte -->

<script>
    export let text = '';
    export let label = 'Copy';

    let copied = false;

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(text);
            copied = true;
            setTimeout(() => copied = false, 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
</script>

<button class="btn btn-sm btn-outline-primary" on:click={copyToClipboard}>
    {copied ? 'Copied!' : label}
</button>