<script>
    import { enhance } from '$app/forms';
    export let form;
  </script>
  
  <form method="POST" use:enhance>
    <div class="mb-3">
      <label for="firstName" class="form-label">Vorname*</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        class="form-control"
        required
      />
    </div>
  
    <div class="mb-3">
      <label for="email" class="form-label">E-Mail*</label>
      <input
        id="email"
        name="email"
        type="email"
        class="form-control"
        required
      />
    </div>
  
    <button type="submit" name="register" class="btn btn-primary">
      Anmelden
    </button>
  
    {#if form?.error}
      <div class="text-danger mt-2">{form.error}</div>
    {/if}
  </form>
  