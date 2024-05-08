<script>
  const list = 3;
</script>

<a href="/">Home Page</a>
<div class="h-screen w-full">
  <div
    class="grid grid-cols-1 gap-5 justify-items-center content-center h-full"
  >
    <h1 class="text-3xl font-bold flex justify-center items-center">
      Match Routing
    </h1>

    <a href="matchrout/1">p1</a>
    <a href="matchrout/2">p2</a>
    <a href={`matchrout/${list}`}>p3</a>
  </div>
</div>
