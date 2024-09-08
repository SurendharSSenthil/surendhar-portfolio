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
    <p class="px-4 py-2 bg-white text-slate-950 font-medium mb-4">
        Connect with me &darr;
    </p>
    <div class="flex flex-col sm:flex-row justify-between items-center sm:gap-4 gap-12 w-full">
     <div class="flex justify-center items-center sm:w-1/2">
            <img src={"/Contact.png"} alt="contact" class="max-h-80 w-auto object-contain hover:shadow-[0_0_10px_rgba(138,43,226,0.8)]" />
        </div>
        <div class="flex flex-col gap-4 items-center justify-center sm:w-1/2 text-center sm:text-left">
            <p>
                <b class="pr-2 text-violet-400">Email</b>
                surendharsenthil257@gmail.com
            </p>
            <p>
                <b class="pr-2">Instagram</b>
                <a href="https://www.instagram.com/surendhar3525" target="_blank" class="text-violet-400">
                    Surendhar3525
                    <sup>
                        <span class="text-xs scale-75 pl-0.5">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
                        </span>
                    </sup>
                </a>
            </p>
            <p>
                <b class="pr-2">LinkedIn</b>
                <a href="https://www.linkedin.com/in/surendhar-senthil-574710286/" target="_blank" class="text-violet-400">
                    Surendhar Senthil
                    <sup>
                        <span class="text-xs scale-75 pl-0.5">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]" />
                        </span>
                    </sup>
                </a>
            </p>
            <p>
                <b class="pr-2">Twitter</b>
                <a href="https://x.com/SurendharS05" target="_blank" class="text-violet-400">
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
    <p class="absolute bottom-1 left-1/2 transform -translate-x-1/2">&copy; {new Date().getFullYear()}</p>
</footer>
