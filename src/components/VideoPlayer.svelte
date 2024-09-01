<!-- VideoPlayer.svelte -->
<script>
    export let src = '';
    export let width = '640px';
    export let height = '360px';
</script>

<div class="flex justify-center items-center bg-transparent">
    <img 
        class="rounded-lg" 
        src={src} 
        width={width} 
        height={height} 
        alt="GIF"
    />
</div>
