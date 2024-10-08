<script lang='ts' >
import { formatDate } from "$lib/utils";

export let data
</script>

<svele:head>
   <title>{data.meta.title}</title>
   <meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svele:head>

<article class="container mx-auto md:px-4" >
   <hgroup class="mb-6" >
      <h1 class="text-3xl md:text-4xl font-bold">{data.meta.title}</h1>
      <p class="text-muted-foreground" >Published at {formatDate(data.meta.date)}</p>
   </hgroup>

   <div class="prose">
      <svelte:component this={data.content}/>
   </div>
</article>