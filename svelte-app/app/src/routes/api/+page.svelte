<script>
    export let data;

    const {products} = data
    //console.log(products); 

</script>

{#each products as product}
    <h2>{product.title}</h2>
    <h2>{product.brand}</h2>
    <h2>{product.category}</h2>
    <h2>{product.description}</h2>
    <h2>{product.discountPercentage}</h2>
    <h2>{product.price}</h2>
    <h2>{product.rating}</h2>
    <h2>{product.stock}</h2>
    <h2>{product.thumbnail}</h2>
{/each}