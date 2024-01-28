<script lang="ts">
    import { themes } from "$lib/index.js";
    import { onMount } from "svelte";
    let current_theme = "";

    onMount(() => {
        if (typeof window !== "undefined") {
            const theme = window.localStorage.getItem("theme");
            if (theme && themes.includes(theme)) {
                document.documentElement.setAttribute("data-theme", theme);
                current_theme = theme;
            }
        }
    });

    function set_theme(event: Event) {
        const select = event.target as HTMLSelectElement;
        const theme = select.value;
        if (themes.includes(theme)) {
            const one_year = 60 * 60 * 24 * 365;
            window.localStorage.setItem("theme", theme);
            document.cookie = `theme=${theme}; max-age=${one_year}; path=/;`;
            document.documentElement.setAttribute("data-theme", theme);
            current_theme = theme;
        }
    }
</script>

<div class="prose flex justify-center">
    <h1 class="text-5xl">Settings</h1>
</div>
<div class="m-8 px-96 flex justify-center">
    <select
        bind:value={current_theme}
        data-choose-theme
        class="select select-bordered select-primary w-100 max-w-3xl text-xl capitalize"
        on:change={set_theme}
    >
        <option value="" disabled={current_theme !== ""}>
            Choose a theme
        </option>
        {#each themes as theme}
            <option value={theme} class="capitalize">{theme}</option>
        {/each}
    </select>
</div>
