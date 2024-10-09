<script lang="ts">
	import Hero from '$lib/components/sections/hero.svelte';
	import { Badge } from '$lib/components/ui/badge';

	import { formatDate } from "$lib/utils";

	export let data
</script>

<div class="mx-auto w-full max-w-screen-sm px-2 md:max-w-screen-md">
	<Hero />
	<section class="container mx-auto md:px-5" >
		<h1 class="text-xl md:text-3xl mt-2 mb-5 font-bold" >Blogs</h1>
		<ul class="flex flex-col gap-3">
			{#each data.blogs as blog}
				<li class="group py-2 px-3 rounded hover:bg-secondary/70 dark:hover:bg-secondary/20"  >
					<a data-sveltekit-preload-data="hover" href={`/blogs/${blog.slug}`}>
						<h1 class="text-lg md:text-xl font-semibold capitalize group-hover:underline line-clamp-2" >{blog.title}</h1>
						<p class="text-muted-foreground">{formatDate(blog.date)}</p>
						<p class="description">{blog.description}</p>

						{#if blog.categories}
							<div class="flex gap-1 flex-wrap">
								{#each blog.categories as ctg}
									<Badge>{ctg}</Badge>
								{/each}
							</div>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</div>