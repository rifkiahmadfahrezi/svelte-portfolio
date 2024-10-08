<script lang='ts'>
   import { personalInfo } from "$lib/site.config";
</script>

<section id="experience" class="container mx-auto md:px-4"  >
   <h1 class="text-2xl md:text-3xl my-6 font-bold" >Experience</h1>
   
   {#if personalInfo?.experience}
      <ul class="grid grid-cols-1 gap-4 list-disc" >
         {#each personalInfo.experience as exp}
            <li class="ml-5 md:ml-8" >
               <h1 class="font-semibold text-xl md:font-2xl flex flex-wrap items-center" >{exp.position} 
                  <span class="text-base text-muted-foreground ml-2" >~ {exp.from} - {exp.until}</span>  
               </h1>
               <p class="text-muted-foreground" >{exp.company}</p>

               <p>{exp.description}</p>
            </li>
         {/each}
      </ul>
   {/if}
</section>