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
        class="input"
        type="file"
        name="file"
        accept=".jpg, .png, .jpeg, .gif, .webp|image/*"
      />
    </label>
      <div class="card-actions justify-end">
        <button class="btn btn-info">Submit</button>
      </div>
    </div>
  </div>
  </form>
</div>
