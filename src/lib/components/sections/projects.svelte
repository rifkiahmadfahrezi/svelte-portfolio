<script lang='ts'>
   import { personalInfo } from "$lib/site.config";
   import { Button } from "../ui/button";
   import { Badge } from "../ui/badge";
   import { Icon, ArrowTopRightOnSquare } from "svelte-hero-icons";
</script>

<section id="projects" class="container mx-auto md:px-4"  >
   <h1 class="text-2xl md:text-3xl my-6 font-bold" >Projects</h1>
   
   {#if personalInfo?.projects}
      <ul class="grid grid-cols-1 gap-4 list-disc" >
         {#each personalInfo.projects as pro}
            <li class="ml-5 md:ml-8" >
               <h1 class="font-semibold text-xl md:font-2xl" >{pro.title}</h1>
               <p>{pro.description}</p>

               <!-- {#if pro?.role}
                  <div class="flex gap-1 flex-wrap mt-2">
                     {#each pro.role as role }
                        <Badge >
                           {role}
                        </Badge>
                     {/each}
                  </div>
               {/if} -->
               {#if pro?.techStack}
                  <div class="flex gap-1 flex-wrap mt-2">
                     {#each pro.techStack as stk }
                        <Badge variant='outline' >
                           {stk}
                        </Badge>
                     {/each}
                  </div>
               {/if}

               {#if pro.link}
                  <Button variant="ghost" size="sm" class="mt-3"  >
                     <a 
                        target="_blank"
                        href={pro.link} class="flex gap-1 items-center underline"  >
                        Visit <Icon size="16" src="{ArrowTopRightOnSquare}"/>
                     </a>
                  </Button>
               {/if}
            </li>
         {/each}
      </ul>
   {/if}
</section>