<script lang="ts">
	import { personalInfo } from '$lib/site.config';
</script>

<main class="container px-5 py-7">
	<h1 class="text-xl font-semibold md:text-3xl">{personalInfo.fullName}</h1>
	<p class="mt-2 text-muted-foreground">{personalInfo.bio}</p>
</main>
