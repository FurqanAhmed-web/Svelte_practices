<script lang="js">
  let height = null;
  let weight = null;
  let results = "";

  function BMI(height, weight) {
    if (height === "" || height < 0 || isNaN(height)) {
      results = `Please give a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
      results = `Please give a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results = bmi;
      console.log(results);
    }
  }
</script>

<form class="m-12 grid grid-cols-1 gap-4 place-items-center" action="">
  <h2 class="text-xl text-slate-700 font-bold">Calculate BMI</h2>
  <div>
    <label class="font-medium" for="height">Heigth:</label>
    <input
      class="bg-slate-500 border text-white border-black py-1 px-2 rounded-md"
      type="number"
      bind:value={height}
    />
  </div>
  <div>
    <label class="font-medium" for="weight">weight</label>
    <input
      class="bg-slate-500 border text-white border-black py-1 px-2 rounded-md"
      type="number"
      bind:value={weight}
    />
  </div>

  <button
    class="border border-black bg-slate-500 rounded-lg text-white p-2"
    type="submit"
    on:click={BMI(weight, height)}>Calculate</button
  >

  <span class="border border-black bg-slate-500 rounded-lg text-white p-2"
    >{results}</span
  >

  <h2 class="text-base font-bold">BMI weight guideline</h2>
  <span>Under Weight = Less than 18.6</span>
  <span>Normal Range = 18.6 and 24.9</span>
  <span>Overweight = Greater than 24.9</span>
</form>
