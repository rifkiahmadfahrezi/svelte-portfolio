<script lang="ts">
	import { site } from '$lib/site.config';
	import { Button } from '../ui/button';
	import ThemeToggler from './themeToggler.svelte';
</script>

<header class="sticky top-0 border-b bg-background p-1">
	<nav class="container mx-auto flex items-center justify-between">
		<Button variant="ghost">
			<a href="/" class="font-bold md:text-xl">{site.name}</a>
		</Button>

		<ul class="flex items-center gap-1">
			{#each site.navbarMenus as { label, link, newTab }}
				<li>
					<Button size="sm" variant="ghost">
						<a rel="noreferrer" target={newTab ? '_blank' : null} href={link} class="font-normal"
							>{label}</a
						>
					</Button>
				</li>
			{/each}
			<li>
				<ThemeToggler />
			</li>
		</ul>
	</nav>
</header>
