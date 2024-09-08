<script>
    export let step;
</script>

<a
    href={step.href}
    target="_blank"
    class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center cursor-pointer group hover:border-violet-400 duration-200"
>
    <div
        class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"
    >
        <i class={step.icon} />
    </div>
    <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">
        {step.name}
    </h3>
    <slot />
    <div class="flex-1 flex justify-between gap-4 items-end">
        <button class="bg-slate-950 relative anim text-center">
            Go to &rarr;
        </button>
    </div>
</a>

<style>
    .anim{
        border-radius: 10px;
        padding: 6px 10px;
    }
    @property --angle{
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
    }
    .anim::after, .anim::before{
        content: '';
        position: absolute;
        height: 104%;
        width: 104%;
        background-image: conic-gradient(from var(--angle),transparent 30%,violet, indigo, orange);
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: -1;
        /* padding: 14px; */
        border-radius: 10px;
        animation: 2s spin linear infinite;

    }
    .anim::before{
        filter: blur(1.5rem);
        /* opacity: 0.7; */
    }
    @keyframes spin{
        from{
            --angle: 0deg;
        }to{
            --angle: 360deg;
        }
    }
</style>
