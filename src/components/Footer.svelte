<script>
import contact from "/Contact.png";
import {onMount} from 'svelte';

onMount(() => {
        console.log('Component mounted!');
    });
</script>

<footer
    class="py-20 sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center relative"
>
<div class="custom-shape-divider-bottom-1726376532">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
    </div>
    <p class="px-4 py-2 bg-white text-slate-950 font-medium mb-4">
        Connect with me &darr;
    </p>
    <div class="flex flex-col sm:flex-row justify-between items-center sm:gap-4 gap-12 w-full">
     <div class="flex justify-center items-center sm:w-1/2">
            <img src={contact} alt="contact" class="max-h-80 w-auto object-contain hover:shadow-[0_0_10px_rgba(138,43,226,0.8)]" />
        </div>
        <div class="flex flex-col gap-4 items-center justify-center sm:w-1/2 text-center sm:text-left z-[1000]">
            <p>
                <b class="pr-2 text-violet-400">Email</b>
                surendharsenthil257@gmail.com
            </p>
            <p>
                <b class="pr-2 text-violet-400">Instagram</b>
                <a href="https://www.instagram.com/surendhar3525" target="_blank" >
                    Surendhar3525
                    <sup>
                        <span class="text-xs scale-75 pl-0.5">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
                        </span>
                    </sup>
                </a>
            </p>
            <p>
                <b class="pr-2 text-violet-400">LinkedIn</b>
                <a href="https://www.linkedin.com/in/surendhar-senthil-574710286/" target="_blank" >
                    Surendhar Senthil
                    <sup>
                        <span class="text-xs scale-75 pl-0.5">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
                        </span>
                    </sup>
                </a>
            </p>
            <p>
                <b class="pr-2 text-violet-400">Twitter</b>
                <a href="https://x.com/SurendharS05" target="_blank" class="z-10">
                    SurendharS05
                    <sup>
                        <span class="text-xs scale-75 pl-0.5">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
                        </span>
                    </sup>
                </a>
            </p>
        </div>
       
    </div>
    <p class=" poppins absolute bottom-1 left-1/2 transform -translate-x-1/2 font-light">&copy;Surendhar Senthil {new Date().getFullYear()}</p>
</footer>



<style>

.custom-shape-divider-bottom-1726376532 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1726376532 svg {
    position: relative;
    display: block;
    width: calc(135% + 1.3px);
    height: 153px;
}

.custom-shape-divider-bottom-1726376532 .shape-fill {
    fill: #7E53FF;
}
</style>