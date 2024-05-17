<script lang="js">
  // @ts-ignore
  function handleClick(event) {
    const buttonId = event.target.id;
    document.body.style.backgroundColor = buttonId;
    const setElement = document.getElementById("set");
    setElement ? (setElement.style.backgroundColor = buttonId) : "black";
  }
</script>

<h1 class="text-3xl font-bold underline">Color Switcher</h1>
<div class="grid grid-cols-4 gap-4 bg-white p-5" id="set">
  <button
    class="button bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    id="grey"
    on:click={handleClick}>Grey</button
  >
  <button
    class="button bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    id="white"
    on:click={handleClick}>White</button
  >
  <button
    class="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    id="blue"
    on:click={handleClick}>Blue</button
  >
  <button
    class="button bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    id="yellow"
    on:click={handleClick}>Yellow</button
  >
</div>
