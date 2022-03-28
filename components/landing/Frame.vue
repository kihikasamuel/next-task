<template>
    <div class="grid md:grid-cols-6 p-5 mt-4 font-sans bg-white">
        <!-- begin task list -->
        <div class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col">
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

        <div class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between">
                    <span class="px-2 py-1 bg-purple-500 text-xs text-white rounded-md">Work</span>
                    <span class=""><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">Sales Peach</h1>
                    <p class="text-sm text-gray-400">Peach to NY Times at 10</p>
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
                    </span>
                    <span class="text-gray-300">
                        <font-awesome-icon :icon="['fas', 'calendar']"/>
                        {{dated}}
                    </span>
                </div>
           </div>
        </div>

        <div class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between">
                    <span class="px-2 py-1 bg-green-500 text-xs text-white rounded-md">Recreational</span>
                    <span class=""><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">Take a walk</h1>
                    <p class="text-sm text-gray-400">Karura Forest</p>
                </div>
                <!-- task assigned to -->
                <div class="flex md:flex-row md:mt-4 place-content-between">
                    <span class="flex flex-row">
                        <!--  -->
                    </span>
                    <span class="text-gray-300">
                        <font-awesome-icon :icon="['fas', 'calendar']"/>
                        {{dated}}
                    </span>
                </div>
           </div>
        </div>

        <div class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between">
                    <span class="px-2 py-1 bg-pink-500 text-xs text-white rounded-md">Personal</span>
                    <span class=""><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">Gymn</h1>
                    <p class="text-sm text-gray-400">Gymn starts from 5pm</p>
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
                        {{dated}}
                    </span>
                </div>
           </div>
        </div>

        <div class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between">
                    <span class="px-2 py-1 bg-blue-500 text-xs text-white rounded-md">Personal</span>
                    <span class=""><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">Gymn</h1>
                    <p class="text-sm text-gray-400">Gymn starts from 5pm</p>
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
                        {{dated}}
                    </span>
                </div>
           </div>
        </div>

        <div class="md:col-span-2 bg-white p-4 rounded-lg m-4">
            <!-- task container -->
            <div class="flex flex-col">
                <!-- task label -->
                <div class="flex md:flex-row w-full place-content-between">
                    <span class="px-2 py-1 bg-indigo-400 text-xs text-white rounded-md">Group</span>
                    <span class=""><font-awesome-icon :icon="['fas','ellipsis-h']"/></span>
                </div>
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">Gymn</h1>
                    <p class="text-sm text-gray-400">Gymn starts from 5pm</p>
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
                        {{dated}}
                    </span>
                </div>
           </div>
        </div>
        <!-- end task list -->
    </div>
</template>

<script>
export default {
    props: ['date'],
    data() {
        return {
            dated: new Date().toDateString(),
        }
    },
    
}
</script>