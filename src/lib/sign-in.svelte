<script lang="ts">
	import { signInWithEmailAndPassword } from "firebase/auth";
	import { auth } from "$lib/firebase";
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";
	import { FirebaseError } from "firebase/app";
	let email = "";
	let password = "";

	onMount(() => {
		if (!!auth.currentUser) {
			toast.error("you're already signed in!", {
				duration: 7000,
			});
		}
	});

	async function onSubmitHandler(event: SubmitEvent) {
		event.preventDefault();
		if (!email || !password) {
			toast.error("There's nothing there.");
			return;
		}

		try {
			let result = await signInWithEmailAndPassword(
				auth,
				email,
				password,
			);

			if (result.user) {
				toast.success("Successfully signed in, welcome back!");
			} else {
				toast.error("something really went wrong.");
			}
		} catch (err) {
			if (err instanceof FirebaseError) {
				if (err.code === '"auth/invalid-credential"') {
					toast.error("Email/password is incorrect");
				} else {
					toast.error(err.message);
				}
			} else {
				toast.error(err.toString());
			}
		}
	}
</script>

<div class="prose">
	<form
		class="w-96 mx-auto p-10 bg-gray-800 rounded-lg"
		on:submit={onSubmitHandler}
	>
		<label class="label">
			<span class="text-slate-50">Username or Email:</span>
			<input
				bind:value={email}
				class="input"
				type="text"
				placeholder="Username/email"
			/>
		</label>

		<label class="label pt-5">
			<span class="text-slate-50">Password:</span>
			<input
				bind:value={password}
				class="input"
				type="password"
				placeholder="Password"
			/>
		</label>

		<button class="btn" type="submit" disabled={!!auth.currentUser}
			>Submit</button
		>
	</form>
</div>
