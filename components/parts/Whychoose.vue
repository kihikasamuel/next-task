<template>
    <div class="grid md:grid-cols-12 mt-7 ml-5 mr-5 p-10 rounded-md mix-blend-overly">
        <div class="col-span-4 flex flex-col text-xl">
            <h1 class="font-narrow font-bold text-3xl p-4">
                Become more productive, slay your goals like a pro.
            </h1>
            <p class="font-narrow text-xl text-gray-800 justify-start p-4">
                Scheduling is the first step to achieving maximum productivity.
                We help you achieve your goals while doing less.
                All you need is an account and leave us to automatically schedule tasks for you.
            </p>
            <div class="font-narrow text-gray-600 text-sm divide-x-2 divide-gray-500 divide-dotted">
                <span class="pl-2 pr-2"> Basic</span>
                <span class="pl-2 pr-2"> Easy to use </span>
                <span class="pl-2 pr-2"> Instant Reminders through emails and sms</span>
            </div>
            <button 
                class="
                    text-white font-bold
                    mt-5 bg-purple-500 
                    px-5 py-3 rounded
                    shadow-xl shadow-gray-600 
                    hover:bg-pink-800 hover:shadow-2xl
                "
                @click="goTo"
            >
                Get Started
                <font-awesome-icon :icon="['fas', 'angle-right']"/>
            </button>
        </div>
        <div class="col-span-8">
            <img 
                src="/images/schedulingtasksdashboard.jpeg" 
                class="
                    dashboard-image float-right 
                    rounded 
                    shadow-xl shadow-black-500/50
                    bg-blend-multiply
                " 
                alt="Task Scheduling for proffessionals"
            >
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.grid 
{
    /* background-image: linear-gradient(to right top, #d0e8f8, #c4def3, #b9d4ee, #afcae9, #a6c0e4, #9dc0e6, #93c1e8, #88c1ea, #77ccef, #67d6ef, #60e0ea, #65e9e0); */
    background-image: linear-gradient(to right top, #d0e8f8, #d6eaf9, #dcecfa, #e2eefb, #e7f0fc, #e8f0fb, #e9f0fb, #eaf0fa, #e7eef8, #e3ecf5, #e0eaf3, #dde8f0);
}
.dashboard-image
{
    max-width: 100%;
    max-height: 550px;
}
</style>