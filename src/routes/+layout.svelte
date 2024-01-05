<script lang="ts">
	import 'tailwindcss/tailwind.css';
</script>

<div class="navbar bg-base-100 bg-neutral text-neutral-content">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
			>
				<li><a href="/pics" class="btn">pictures of dogs</a></li>
				<li><a href="/post-pic" class="btn">post a pic</a></li>
			</ul>
			<a class="btn btn-ghost text-xl" href="/">DOGS!</a>
		</div>
	</div>
	<div class="navbar-end">
		<a class="btn btn-ghost btn-rounded ease-in-out duration-300 hover:scale-110" href="/">Home</a>
		<a class="btn btn-ghost btn-rounded ease-in-out duration-300 hover:scale-110" href="/sign-in"
			>Sign in
		</a>
		<a class="btn btn-ghost btn-rounded ease-in-out duration-300 hover:scale-110" href="/sign_up"
			>Sign up
		</a>
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
			  <div class="w-10 rounded-full">
				<img alt="Tailwind CSS Navbar component"/>
			  </div>
			</div>
			<ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52">
			  <li>
				<a class="justify-between">
				  Profile
				</a>
			  </li>
			  <li><a>Settings</a></li>
			  <li><a>Logout</a></li>
			</ul>
		  </div>
	</div>
</div>
<slot />
