<!-- src/lib/components/IntroSection.svelte -->
<div class="d-flex align-items-center py-5 container">
  <div class="w-50">
    <slot name="text" />
  </div>
  <div class="w-50 text-end">
    <slot name="image" />
  </div>
</div>
