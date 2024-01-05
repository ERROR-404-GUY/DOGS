<form
  class="w-96 mx-auto p-10 bg-gray-800 rounded-lg"
  action="/upload"
  method="POST"
  enctype="multipart/form-data"
>
  <label class="label pt-5">
    <span class="text-slate-50">Dog pic</span>
    <input
      class="input"
      type="file"
      name="file"
      accept=".jpg, .png, .jpeg, .gif, .webp|image/*"
    />
  </label>

  <button class="btn">Submit</button>
</form>
