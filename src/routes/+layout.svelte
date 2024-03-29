<script lang="ts">
	import { themes } from "$lib/index.js";
	import "tailwindcss/tailwind.css";
	import LogOutModal from "$lib/log_out_modal.svelte";
	import { onMount } from "svelte";
	import { Toaster } from 'svelte-french-toast'
	let showModal: () => void;

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


	
</script>
<Toaster />
<div class="navbar bg-base-100 bg-neutral text-neutral-content">
	<div class="navbar-start">
		<a
			class="btn btn-ghost text-xl btn-rounded ease-in-out duration-300 hover:scale-110"
			href="/"
			><img src="logo.png" alt="Logo" class="h-11" /><span>DOGS!</span></a
		>
	</div>
	<div class="navbar-end">
		<a
			href="/show"
			class="btn btn-ghost btn-rounded ease-in-out duration-300 hover:scale-110"
			>Pictures</a
		>
		<a
			href="/post-pic"
			class="btn btn-ghost btn-rounded ease-in-out duration-300 hover:scale-110 m-3"
			>Upload a picture</a
		>
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="no-prof.webp" />
				</div>
			</div>
			<ul
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded-box w-52"
			>
				<li>
					<a class="text-black" href="/sign-in">Sign in </a>
				</li>
				<li>
					<a class="text-black" href="/sign_up">Sign up </a>
				</li>
				<li>
					<a class="justify-between text-black" href="/profile-page">
						Profile
					</a>
				</li>
				<li>
					<a href="/settings-page" class="text-black">Settings</a>
				</li>
				<li>
					<button on:click={showModal} class="text-black">Logout</button>
				</li>
			</ul>
		</div>
	</div>
</div>
<slot />
<LogOutModal bind:show={showModal} />
