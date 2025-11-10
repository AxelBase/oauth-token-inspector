<!-- src/lib/components/TokenStatus.svelte -->

<script>
    import { getStatusColor } from '../utils/jwt.js';

    export let status = 'No exp claim';

    $: colorClass = getStatusColor(status);
</script>

<span class="badge {colorClass} ms-2">
    {status}
</span>