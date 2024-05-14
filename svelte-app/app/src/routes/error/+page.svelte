<script>
  export let data;
  
  const { value, layer, title } = data;
  let rout = "";
</script>

<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi quaerat
  quasi. Pariatur dolorem doloribus eaque, ipsam recusandae officia commodi
  repudiandae? Accusamus non autem fugiat nisi error blanditiis hic sequi.
</div>
<h2>{rout}</h2>
<h3>{value}</h3>
<h3>{layer}</h3>
<h3>{title}</h3>

<form>
  <input type="text" bind:value={rout} />
  <a href="/error/{rout}">set path</a>
</form>
