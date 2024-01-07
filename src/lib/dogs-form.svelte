<div class="prose">
  <h1 class="  m-10">Choose a picture of a dog here!</h1>

  <form
    class="w-96 mx-auto p-10 bg-gray-800 rounded-lg"
    action="/upload"
    method="POST"
    enctype="multipart/form-data"
  >
    <label class="label pt-5">
      <input
        class="input"
        type="file"
        name="file"
        accept=".jpg, .png, .jpeg, .gif, .webp|image/*"
      />
    </label>

    <button class="btn">Submit</button>
  </form>
</div>
