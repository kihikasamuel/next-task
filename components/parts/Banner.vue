<template>
    <div class="grid md:grid-cols-12">
        <div class="col-span-6">
            <div class="flex flex-col justify-items-center">
                <div class="p-10 md:mt-5 md:ml-20">
                    <h1 
                        class="
                            font-narrow font-black non-italic ordinal
                            text-3xl mb-4
                        "
                    >
                        The easiest way to schedule your tasks.
                    </h1>
                    <!-- <button 
                        class="
                            text-white font-bold
                            mt-5 bg-pink-500 
                            px-5 py-3 rounded
                            shadow-xl shadow-gray-600 
                            hover:bg-pink-800 hover:shadow-2xl
                        "
                        @click="goTo()"
                    >
                    Get Started
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                    </button> -->
                    <span class="text-gray-500">Free for life.</span>
                    <span class="text-gray-500">No credit card.</span>
                </div>
                <div class="p-10 md:mt-5 md:ml-20">
                    <nuxt-link 
                        to="/auth/register"
                        class="
                            text-white font-bold
                            mt-5 bg-pink-500 
                            px-5 py-3 rounded
                            shadow-xl shadow-gray-600 
                            hover:bg-pink-800 hover:shadow-2xl
                        "
                    >
                    Get Started
                    <font-awesome-icon :icon="['fas', 'angle-right']"/>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="col-span-6 bg-left text-center">
            <div 
                class="
                    flex flex-row sm:flex-col
                    doodles mt-2
                    justify-start
                "
            >
                <img src="/images/scheduleyourtodos.jpg" alt="schedule" class="mix-blend-multiply">
                <!-- doodles goes here -->
                <!-- <font-awesome-icon class="text-pink-600 float-right" :icon="['fas', 'clock']"/> -->
                <!-- <font-awesome-icon class="text-black-400" :icon="['fas', 'clock']"/> -->
                <!-- <font-awesome-icon class="text-green-500" :icon="['fas', 'calendar-check']"/> -->
                <!-- <font-awesome-icon class="text-pink-600" :icon="['fas', 'clock']"/> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() 
    {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.bg-left
{
    /* width: 100%; */
    height: 500px;
    background: url(/images/blob.svg) no-repeat;
    margin-top: -50px;
}
.doodles 
{
    font-size: 70px;
}
</style>