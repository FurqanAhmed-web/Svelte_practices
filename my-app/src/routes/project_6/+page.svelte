<script>
  // @ts-nocheck
  let value = "";
  let times = 0;

  let set;

  let setColor;
  let backgroundColor = "#FF2FFF";

  const changeColor = function () {
    const schema = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += schema[Math.floor(Math.random() * 16)];
    }

    backgroundColor = color;
  };

  const increment = function () {
    times++;
    value = `Show Me ${times} times`;
  };

  function startMe() {
    set = setInterval(increment, 500);
    setColor = setInterval(changeColor, 200);
    console.log("Started");
  }

  function stopMe() {
    // @ts-ignore
    clearTimeout(set);
    // @ts-ignore
    clearTimeout(setColor);
    console.log("Stopped");
  }
</script>

<div
  class="grid grid-cols-1 gap-5 place-content-center justify-items-center h-screen w-full"
  style="background-color: {backgroundColor}"
>
  <h1 class="text-2xl text-slate-400">Asyc Js</h1>
  <div class="grid grid-cols-2 gap-3">
    <button
      class="px-2 py-1 bg-red-400 text-white rounded-md border-2 border-slate-300"
      on:click={startMe}>Start showing</button
    ><button
      class="px-2 py-1 bg-red-400 text-white rounded-md border-2 border-slate-300"
      on:click={stopMe}>Stop showing</button
    >
  </div>

  <h2 class="text-2xl text-slate-400">{value}</h2>
</div>
