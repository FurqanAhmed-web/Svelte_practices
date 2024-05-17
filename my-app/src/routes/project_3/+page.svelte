<script>
  let clock = "";

  setInterval(() => {
    let date = new Date();

    clock = date.toLocaleTimeString();
  }, 1000);
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="grid grid-cols-1 justify-items-center gap-4 w-fit">
    <label class="text-2xl font-extrabold text-stone-800" for="time"
      >Current Time</label
    >
    <span
      class="text-3xl font-extrabold text-slate-800 bg-slate-300 border-2 rounded-md border-stone-600 p-4"
      >{clock}</span
    >
  </div>
</div>
