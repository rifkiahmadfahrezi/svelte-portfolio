<script lang="ts">
	import { site } from '$lib/site.config';
</script>

<footer class="border-t px-5 py-2">
	<div class="container mx-auto flex items-center justify-between px-2">
		<!-- <div class="">
         <h1 class="text-xl font-bold" >
            <a href="/">
            {site.name}
            </a>
         </h1>
         <p>{site.description}</p>
      </div> -->

		<small>&copy; {new Date().getFullYear()}, All right reserved</small>
	</div>
</footer>
