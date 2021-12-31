<template>
  <section
    class="md:col-span-5 z-0 cont rounded overflow-y-none scroll-none"
  >
    <!-- <div class="cont"> -->

        <!-- BEGIN row 1 -->
        <div class="grid md:grid-cols-6 px-4 pt-4 bg-white">

            <!-- search begin-->
            <div class="md:col-span-4">
                <label for="search">
                    <span></span>
                    <input
                        type="search"
                        class="
                            w-3/4
                            px-4 py-2
                            rounded-full
                            text-gray-400
                            border-2 border-gray-200
                            focus:outline-none
                        "
                        placeholder="Search tasks, teams, schedules.."
                        autocomplete="on"
                    />
                </label>
            </div>
            <!-- search ends -->
            
            <!-- avatar begins -->
            <div class="md:col-span-2">
                <div class="flex md:flex-row md:float-right border-0 border-gray-100 md:w-2/4 md:h-10 p-1 content-center">
                    <span class="border-2 border-gray-200 rounded-full">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                    <span class="text-xs pl-1 pt-3 pb-3 pr-1">
                        {{loggedinuser.fullname}}
                        <font-awesome-icon class="accent-pink-500" :icon="['fas', 'angle-down']"/>
                    </span>
                </div>
            </div>
            <!-- avatar ends -->
        </div>
        <!-- END of row 1 -->

        <!-- BEGIN row 2 -->
        <div class="grid md:grid-cols-6 pt-8 bg-white">

            <!-- text goes here -->
            <div class="md:col-span-4 font-sans px-4">
                <p class="text-sm"><small></small>{{currentDate}}</p>
                <p class="text-2xl space-x-2">Your Productivity Starts Here.</p>
            </div>
            <!-- end text -->

            <!-- team avatars goes-here -->
            <div class="md:col-span-2">
                <div class="flex md:flex-row">
                    <!-- <span class="border-2 border-gray-200 rounded-full">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                    <span class="border-2 border-gray-200 rounded-full">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8 pl-0" alt="">
                    </span>
                    <span class="border-2 border-gray-200 rounded-full">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8 pl-0 ml-0" alt="">
                    </span> -->
                </div>
            </div>
            <!-- end team avatars -->

        </div>
        <!-- END row 2 -->

        <!-- BEGIN row 3 -->
        <div class="grid md:grid-cols-6 pt-6 pb-3 bg-white">

            <div class="md:col-span-4">
                <Nav class="md:px-4">
                    <!-- flex md:flex-row -->
                    <Nuxt-Link to="#" class="active p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Upcoming
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        In Progress
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Completed
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Cancelled
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Projects
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Calendar
                    </Nuxt-Link>
                </Nav>
            </div>

            <div class="md:col-span-2 text-white">
                <div class="flex md:flex-row md:w-3/4 md:justify-end">
                    <button type="button" class="text-black px-3 py-1 rounded-md bg-gray-100 mr-1">
                        <font-awesome-icon :icon="['fas', 'share-alt']" />
                        Share
                    </button>
                    <button type="button" class="px-3 py-1 rounded-md bg-blue-400">
                        <font-awesome-icon :icon="['fas', 'plus']" />
                        Add New
                    </button>
                </div>
            </div>
        </div>
        <!-- END row 3 -->

        <!-- BEGIN fetched content based on links -->
        <landing-dynamicload></landing-dynamicload>
        <!-- END fetched content based on links -->

    <!-- </div> -->
  </section>
</template>
<script>
export default {
    middleware: 'auth',
    props:['loggedinuser'],
    data() {
        return {
            currentDate: new Date().toDateString()
        }
    },
}
</script>