<!-- src/lib/components/SignatureSection.svelte -->

<script>
    export let signature = '';
</script>

<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#signatureCollapse" aria-expanded="false" aria-controls="signatureCollapse">
            Signature
        </button>
    </h2>
    <div id="signatureCollapse" class="accordion-collapse collapse">
        <div class="accordion-body">
            <pre class="bg-light p-2 rounded"><code>{signature}</code></pre>
        </div>
    </div>
</div>

<style>
    pre code {
        word-break: break-all;
        white-space: pre-wrap;
    }
</style>