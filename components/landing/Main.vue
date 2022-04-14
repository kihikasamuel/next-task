<template>
  <section
    class="md:col-span-5 cont rounded scroll-none border-2 border-gray-200 bg-white"
  >
    <div class="sticky top-0 brightness-0">

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
                <div class="flex md:flex-row md:float-right border-0 border-gray-100 md:w-2/4 md:h-10 p-1 content-center cursor-pointer">
                    <span class="border-2 border-gray-200 rounded-full">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                    <span class="text-xs pl-1 pt-3 pb-3 pr-1 user-name">
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
                <!-- <div class="flex md:flex-row md:w-2/4 md:float-right">
                    <span class="border-2 border-gray-200 rounded-full z-10 relative right-0">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                    <span class="border-2 border-gray-200 rounded-full z-20 relative">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                    <span class="border-2 border-gray-200 rounded-full z-30 relative">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                </div> -->
            </div>
            <!-- end team avatars -->

        </div>
        <!-- END row 2 -->

        <!-- BEGIN row 3 -->
        <div class="grid md:grid-cols-6 pt-6 pb-3 bg-white">

            <div class="md:col-span-4">
                <Nav class="md:px-4">
                    <!-- flex md:flex-row -->
                    <Nuxt-Link to="#" class="active p-4 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Upcoming
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-4 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        In Progress
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-4 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Completed
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-4 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Cancelled
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-4 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Projects
                    </Nuxt-Link>
                    <Nuxt-Link to="#" class="p-4 text-gray-500 hover:bg-gray-100 hover:text-blue-500 rounded-md">
                        Calendar
                    </Nuxt-Link>
                </Nav>
            </div>

            <div class="md:col-span-2 text-white">
                <div class="flex md:flex-row md:w-3/4 justify-end content-center">
                    <button type="button" class="text-black px-3 py-1 border-2 border-black-200 rounded-md bg-gray-100 mr-2">
                        <font-awesome-icon :icon="['fas', 'share-alt']" />
                        Share
                    </button>
                    <button type="button" class="px-3 py-1 rounded bg-blue-700" @click="showModal">
                        <font-awesome-icon :icon="['fas', 'plus']" />
                        Add New
                    </button>
                </div>
            </div>
        </div>
        <!-- END row 3 -->
        <landing-frame 
            :date="currentDate"
            :loading="loading"
        />
    </div>
    <!-- BEGIN fetched content based on links -->
    
    <!-- END fetched content based on links -->

    <!-- BEGIN Modal -->
    <landing-addtaskmodal
        v-show="isModalVisible"
        @close="closeModal"
        :user="loggedinuser"
    />
    <!-- END Modal -->

  </section>
</template>
<script>
// import { mapAction } from 'vuex';
export default {
    middleware: 'auth',
    props:['loggedinuser'],
    data() {
        return {
            currentDate: new Date().toDateString(),
            isModalVisible: false,
            loading: false,
        }
    },
    computed: {
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false
        },
        
    },
}
</script>