<script>
	import Navbar from '$lib/components/shared/navbar.svelte';
	import Footer from '$lib/components/shared/footer.svelte';

	import { ModeWatcher } from 'mode-watcher';

	import '../app.css';
	import { site } from '$lib/site.config';
</script>

<svelte:head>
	<title>{site.name} - {site.description}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<ModeWatcher defaultMode="system" />
<Navbar />
<main class="min-h-svh">
	<slot />
</main>
<Footer />
