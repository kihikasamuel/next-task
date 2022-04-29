<template>
    <div class="grid grid-cols-12 font-narrow border-2 bg-blue-100 rounded mix-blend-luminosity">
        <div class="col-span-12 flex flex-col md:ml-10 p-10">
            <div class="font-bold text-center">
                <p class="text-gray-400">Join {{brands}}+ Happy Users on NexTask.</p>
            </div>
            <div class="flex flex-row p-10 justify-center">
                <img class="pr-4" src="/images/brands/logo.svg" alt="">
                <img class="pr-4" src="/images/brands/logo.svg" alt="">
                <img class="pr-4" src="/images/brands/logo.svg" alt="">
                <img class="pr-4" src="/images/brands/logo.svg" alt="">
                <img class="pr-4" src="/images/brands/logo.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() 
    {
        return {
            brands: 1,
        }
    }
}
</script>