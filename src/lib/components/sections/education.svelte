<script lang='ts'>
   import { personalInfo } from "$lib/site.config";
</script>

<section id="education" class="container mx-auto md:px-4"  >
   <h1 class="text-2xl md:text-3xl my-6 font-bold" >Education</h1>
   
   {#if personalInfo?.education}
      <ul class="grid grid-cols-1 gap-4 list-disc" >
         {#each personalInfo.education as edu}
            <li class="ml-5 md:ml-8" >
               <h1 class="font-semibold text-xl md:font-2xl flex flex-wrap items-center" >{edu.school} 
                  <span class="text-base text-muted-foreground ml-2" >~ {edu.from} - {edu.until}</span>  
               </h1>
               <p class="text-muted-foreground" >{edu.major}</p>

               <p>{edu.description}</p>
            </li>
         {/each}
      </ul>
   {/if}
</section>