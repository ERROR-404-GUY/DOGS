<script lang="ts" context="module">
import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";
  import { success } from "@mariojgt/wind-notify/packages/toasts/messages";
  let input: HTMLInputElement;
  let image: string | ArrayBuffer | null | undefined;
  let title = ""
  let message = ""
  let alertType = success
  let time = 3
  let position = "top"
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


function receive(){
  title = "Success"
  message = "your picture was posted succesfully"
  startWindToast(title,message,alertType,time)
}

</script>
<div class="prose">
  <form
    class="w-96 mx-auto p-10 rounded-lg"
    action="/upload"
    method="POST"
    enctype="multipart/form-data"
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
          <button class="btn btn-info" on:click={receive}>Submit</button>

        </div>
      </div>
    </div>
  </form>
</div>
