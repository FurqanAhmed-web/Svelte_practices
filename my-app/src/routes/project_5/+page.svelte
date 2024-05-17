<script>
  let images = [
    {
      id: "photoshop",
      src: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: "japan",
      src: "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: "river",
      src: "https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: "owl",
      src: "https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: "prayer",
      src: "https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  // @ts-ignore
  function Selection(e){
    console.log(e.target.nodeName);
    if(e.target.nodeName === 'IMG'){
        e.target.parentNode.remove()
    }
  }
</script>

<div
  class="flex items-center flex-col pt-10 gap-5 h-screen w-full bg-slate-800"
>
  <h2 class="text-3xl font-bold text-slate-950">Amazing Image</h2>
  <ul class="grid grid-cols-2 gap-5">
    {#each images as { id, src }}
      <li>
        <img on:click={Selection} width="200px" {id} {src} alt="" />
      </li>
    {/each}
  </ul>
</div>
