<script lang="ts">
	import { me } from '$lib/site.config';
</script>

<main class="container px-5 py-7">
	<h1 class="text-xl font-semibold md:text-3xl">{me.fullName}</h1>
	<p class="mt-2 text-muted-foreground">{me.bio}</p>
</main>
