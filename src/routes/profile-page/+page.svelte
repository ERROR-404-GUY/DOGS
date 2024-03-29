<script>
    import { auth } from "$lib/firebase";
</script>

<div class="prose">
    <h1 class="m-10">This is your profile page!</h1>
    {#if auth.currentUser?.email}
        <p class="m-20">{auth.currentUser?.email}</p>
        {:else }
        <p class="m-20"> you're not signed in!</p>
    {/if } 
</div>
