<script lang='ts' >
import { formatDate } from "$lib/utils";
import { site } from "$lib/site.config.js";

export let data
</script>

<svelte:head>
	<title>blogs | {site.name} - {site.description}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<main class="mx-auto w-full max-w-screen-sm px-2 md:max-w-screen-md my-10" >
	<h1 class="text-xl md:text-3xl mt-2 mb-5 font-bold" >Blogs</h1>
	<ul class="flex flex-col gap-3">
		{#each data.blogs as blog}
			<li class="group py-2 px-3 rounded hover:bg-secondary/70 dark:hover:bg-secondary/20"  >
				<a data-sveltekit-preload-data="hover" href={`/blogs/${blog.slug}`}>
					<h1 class="text-lg md:text-xl font-semibold capitalize group-hover:underline line-clamp-2`" >{blog.title}</h1>
					<p class="text-muted-foreground">{formatDate(blog.date)}</p>
					<p class="description">{blog.description}</p>
				</a>
			</li>
		{/each}
	</ul>
</main>