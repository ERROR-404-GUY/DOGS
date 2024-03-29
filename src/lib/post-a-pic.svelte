<script lang="ts">
  import { auth } from "$lib/firebase";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import toast from "svelte-french-toast";
  let input: HTMLInputElement;
  let image: string | ArrayBuffer | null | undefined;

  function onFileChange(
    event: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    },
  ) {
    if (event.currentTarget.files?.length) {
      const file = event.currentTarget.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        image = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  async function submitHandler(
    event: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    },
  ) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const file = data.get("file") as File;
    if (file.name === "") {
      toast.error("There's nothing there.");
      return;
    }
    const res = await fetch("/upload", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      toast.success("Successfully uploaded!");
    }else{
      toast.error(await res.text());
   }
  }




  onMount(() => {
    if (!auth.currentUser) {
      toast.error("Please sign in if you want to post something.", {
        duration: 7000,
      });
    }
  });

</script>

<div class="prose">
  <form
    class="w-96 mx-auto p-10 rounded-lg"
    action="/upload"
    method="POST"
    enctype="multipart/form-data"
    on:submit={submitHandler}
  >
    <div class="card w-max bg-neutral shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Post a dog pic here!</h2>
        <label class="label pt-5 flex-col">
          <input
            bind:this={input}
            class="file-input file-input-bordered file-input-warning w-96 block"
            type="file"
            name="file"
            accept=".jpg, .png, .jpeg, .gif, .webp|image/*"
            on:change={onFileChange}
          />
          {#if image}
            <img src={image} alt="preview" class="block h-48 p-5" />
          {/if}
        </label>
        <div class="card-actions justify-end">
          <button
            class="btn btn-info"
            disabled={!auth.currentUser}>Submit</button
          >
        </div>
      </div>
    </div>
  </form>
</div>
