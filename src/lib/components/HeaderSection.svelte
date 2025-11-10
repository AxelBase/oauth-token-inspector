<!-- src/lib/components/HeaderSection.svelte -->

<script>
    import CopyButton from './CopyButton.svelte';
    import { highlightJSON } from '../utils/jwt.js';

    export let header = {};

    $: jsonString = JSON.stringify(header, null, 2);
    $: highlighted = highlightJSON(header);
</script>

<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#headerCollapse" aria-expanded="false" aria-controls="headerCollapse">
            Header
        </button>
    </h2>
    <div id="headerCollapse" class="accordion-collapse collapse">
        <div class="accordion-body">
            <pre class="bg-light p-2 rounded"><code>{@html highlighted}</code></pre>
            <br/>
            <CopyButton text={jsonString} label="Copy Header JSON" />
        </div>
    </div>
</div>