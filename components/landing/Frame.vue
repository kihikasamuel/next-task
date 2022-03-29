<template>
    <div class="grid md:grid-cols-6 p-5 mt-4 font-sans bg-white main-col">
        <!-- begin task list -->
        <div v-if="tasks !== null" class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col" v-for="task in tasks" :key="task">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between cursor-pointer">
                    <span class="px-2 py-1 bg-yellow-500 text-xs text-white rounded-md">Work</span>
                    <span class="cursor-pointer"><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">Code</h1>
                    <p class="text-sm text-gray-400">Atleast for 2hrs</p>
                </div>
                <!-- task assigned to -->
                <div class="flex md:flex-row md:mt-4 place-content-between">
                    <span class="flex flex-row">
                        <i class="border-2 border-gray-200 rounded-full relative right-0">
                            <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                        </i>
                        <i class="border-2 border-gray-200 rounded-full relative">
                            <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                        </i>
                        <i class="border-2 border-gray-200 rounded-full relative">
                            <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                        </i>
                    </span>
                    <span class="text-gray-300">
                        <font-awesome-icon :icon="['fas', 'calendar']"/>
                        {{dated}}
                    </span>
                </div>
           </div>
        </div>

        <div v-else class="md:col-span-6 bg-white p-4 rounded-lg m-4 text-center">
                <!-- task label -->
                <p v-if="!loading" class="font-narrow font-bold text-lg">
                    You have no NexTask to view!
                    <strong> Go ahead and start scheduling!</strong>
                </p>
                <p v-else class="font-narrow font-bold text-lg animate-ping">Loading...</p>
        </div>
        <!-- end task list -->
    </div>
</template>

<script>
export default {
    props: ['date', 'tasks', 'loading'],
    data() {
        return {
            dated: new Date().toDateString(),
        }
    },
    
}
</script>

<style scoped>
.main-col 
{
    min-height: 100vh;
}
</style>