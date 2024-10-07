<script lang="ts">
	import { Icon, Sun, Moon } from 'svelte-hero-icons';
	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
	{#if $mode === 'light'}
		<Icon src={Sun} size="20" />
	{:else if $mode === 'dark'}
		<Icon src={Moon} size="20" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
