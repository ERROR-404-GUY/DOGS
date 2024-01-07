<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

{#each data.images as url}
<img src={url} />
{/each}
