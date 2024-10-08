<script>
   import Hero from "$lib/components/sections/hero.svelte";
   import Experience from '$lib/components/sections/experience.svelte';
	import Education from '$lib/components/sections/education.svelte';
	import Projects from '$lib/components/sections/projects.svelte';

	import { site } from "$lib/site.config";
</script>

<svelte:head>
	<title>About | {site.name} - {site.description}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<main class="mx-auto w-full max-w-screen-sm px-2 md:max-w-screen-md my-10">
   <Hero />
	<Experience />
	<Education />
	<Projects />
</main>
