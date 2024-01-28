<script lang="ts">
  let input: HTMLInputElement;
  let image: string | ArrayBuffer | null | undefined;

  function onFileChange(event: Event & { target: HTMLInputElement }) {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        image = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }
</script>

<div class="prose">
  <form
    class="w-96 mx-auto p-10 rounded-lg"
    action="/upload"
    method="POST"
    enctype="multipart/form-data"
  >
    <div class="card w-96 bg-neutral shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Post a dog pic here!</h2>
        <label class="label pt-5">
          <input
            bind:this={input}
            class="file-input file-input-bordered file-input-warning w-full max-w-xs block"
            type="file"
            name="file"
            accept=".jpg, .png, .jpeg, .gif, .webp|image/*"
          />
          <img src={image} alt="preview" class="block h-48" />
        </label>
        <div class="card-actions justify-end">
          <button class="btn btn-info">Submit</button>
        </div>
      </div>
    </div>
  </form>
</div>
