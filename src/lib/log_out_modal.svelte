<script lang="ts">
  import { signOut } from "firebase/auth";
  import { auth } from "./firebase";

  let modal: HTMLDialogElement;
  export function show() {
    modal.show();
  }

  function logOut() {
    signOut(auth);
    modal.close()
  }
</script>

<dialog id="log_out" class="modal bg-black/50" bind:this={modal}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Are you sure you want to log out?</h3>
    <p class="py-4"></p>
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >x</button
      >
    </form>
    <form method="dialog">
      <button class="btn btn-error">No, I want to stay!!!</button>
      <button class="btn btn-success" type="button" on:click={logOut}
        >Yes, I would like to leave.</button
      >
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button />
  </form>
</dialog>
