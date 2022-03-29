<template>
    <div class="grid grid-cols-12 md:pt-10 md:pb-10 bg-gray-300 bg-blend-multiply border-bottom-2 border-gray-500">
        <div class="col-span-12 text-center divide-x divide-black divide-solid">
            <span class="">
                Copyright &copy; {{currentYear}}
            </span>
            <span class="pl-1 pr-1">
                Built with love 
                <font-awesome-icon :icon="['fas', 'heart']" class="text-red-500" />
                by 
                <a 
                    href="https://samkihika.site" 
                    target="_blank" 
                    class="
                        text-blue-400 hover:text-blue-700
                    "
                >
                    Sam Kihika
                </a> 
            </span>
            <span class="pl-2 pr-1">
                <a 
                    href="https://twitter.com/KihikaSamuel"
                    target="_blank" 
                    class="
                        text-blue-400 hover:text-blue-700
                    "
                >
                    <font-awesome-icon :icon="['fab', 'twitter']"/>
                </a>
                <a 
                    href="https://twitter.com/KihikaSamuel"
                    target="_blank" 
                    class="
                        text-blue-400 hover:text-blue-700
                        pl-2
                    "
                >
                    <font-awesome-icon :icon="['fab', 'linkedin']"/>
                </a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() 
    {
        return {
            currentYear: new Date().getFullYear(),
        }
    }
}
</script>