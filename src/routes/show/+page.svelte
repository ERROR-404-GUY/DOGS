<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>
<div class="flex flex-wrap gap-8 justify-between">
{#each data.images as url}
<img src={url} class="w-64 object-contain"/>
{/each}
</div>