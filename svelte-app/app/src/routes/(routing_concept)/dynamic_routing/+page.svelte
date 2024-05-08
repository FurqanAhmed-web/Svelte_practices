<script>
  const list = 3;
</script>

<a href="/">Home Page</a>
<div class="h-screen">
  <div
    class="grid grid-cols-1 gap-5 justify-items-center content-center h-full"
  >
    <h1 class="text-3xl font-bold flex justify-center items-center">
      Dynamic Routing
    </h1>

    <a href="dynamic_routing/1">p1</a>
    <a href="dynamic_routing/2">p2</a>
    <a href={`dynamic_routing/${list}`}>p3</a>
  </div>
</div>
