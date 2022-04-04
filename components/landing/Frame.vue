<template>
    <div class="grid md:grid-cols-6 p-5 mt-4 font-sans bg-white main-col">
        <!-- begin task list -->
        <div v-if="tasks.length > 0" class="md:col-span-2 bg-white p-4 rounded-lg">
            <!-- task container -->
            <div class="flex flex-col border-2 border-gray-100 p-4 m-4 shadow-xl rounded" v-for="task in tasks" :key="task.id">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between cursor-pointer">
                    <span class="px-2 py-1 bg-yellow-500 text-xs text-white rounded-md">{{task.label}}</span>
                    <span class="cursor-pointer"><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">{{task.title}}</h1>
                    <p class="text-sm text-gray-400">{{task.notes}}</p>
                </div>
                <!-- task assigned to -->
                <div class="flex md:flex-row md:mt-4 place-content-between">
                    <span class="flex flex-row">
                        <i class="border-2 border-gray-200 rounded-full relative right-0">
                            <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                        </i>
                    </span>
                    <span class="text-gray-300">
                        <font-awesome-icon :icon="['fas', 'calendar']"/>
                        {{task.scheduledon}}
                    </span>
                </div>
           </div>
        </div>

        <div v-else class="md:col-span-6 bg-white p-4 rounded-lg m-4 text-center">
                <!-- task label -->
                <p v-if="!loading" class="font-narrow font-bold text-lg">
                    You have no NexTask to view! Go ahead and schedule one.
                </p>
                <p v-else class="font-narrow font-bold text-lg animate-ping">
                    Loading...
                </p>
        </div>
        <!-- end task list -->
    </div>
</template>

<script>
export default {
    props: ['date', 'loading'],
    data() {
        return {
            dated: new Date().toDateString(),
        }
    },

    computed: {
        tasks() 
        {
            return this.$store.state.tasks.tasks;
        }
    }
    
}
</script>

<style scoped>
.main-col 
{
    min-height: 100vh;
}
</style>