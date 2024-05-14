<script>
// @ts-nocheck
    import {page} from "$app/stores"
</script>

<h1>{$page.status}</h1>
<h1>{$page.error.message}</h1>
<p>{$page.error.hint}</p>