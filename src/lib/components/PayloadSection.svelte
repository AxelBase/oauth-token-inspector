<!-- src/lib/components/PayloadSection.svelte -->

<script>
    import CopyButton from './CopyButton.svelte';
    import TokenStatus from './TokenStatus.svelte';
    import { highlightJSON, getExpirationStatus } from '../utils/jwt.js';

    export let payload = {};

    $: jsonString = JSON.stringify(payload, null, 2);
    $: highlighted = highlightJSON(payload);
    $: status = getExpirationStatus(payload);
</script>

<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#payloadCollapse" aria-expanded="false" aria-controls="payloadCollapse">
            Payload
        </button>
    </h2>
    <div id="payloadCollapse" class="accordion-collapse collapse">
        <div class="accordion-body">
            <pre class="bg-light p-2 rounded"><code>{@html highlighted}</code></pre>
            <br/>
            <TokenStatus {status} />
            <CopyButton text={jsonString} label="Copy Payload JSON" />
        </div>
    </div>
</div>