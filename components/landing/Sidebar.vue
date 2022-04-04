<template>
    <section class="md:col-span-1 bg-white-500 z-20 mt-0 p-4 rounded">
        <div class="mb-7 p-4 sticky top-0">
            <Nuxt-Link to="/">
                <font-awesome-icon :icon="['fas', 'check-circle']" />
                <strong class="md">NexTask</strong>
            </Nuxt-Link>
        </div>
        <div class="flex flex-col sm:col-span-4 content-center w-full md:sticky md:top-20">

            <!-- start side navigation links -->
            <Nuxt-Link to="/user/dashboard" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'chart-pie']" />
                Dashboard
                <!-- <span class="sm-only"><font-awesome-icon :icon="['fas', 'home']" /></span> -->
            </Nuxt-Link>
            
            <Nuxt-Link to="/user/dashboard" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'tasks']" />
                Tasks
            </Nuxt-Link>
            
            <Nuxt-Link to="/user/dashboard" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'project-diagram']" />
                Projects
            </Nuxt-Link>
            
            <Nuxt-Link to="/user/dashboard" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'users']" />
                Teams
            </Nuxt-Link>
            
            <Nuxt-Link to="/user/dashboard" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'calendar']" />
                Calendar
            </Nuxt-Link>
            
            <Nuxt-Link to="/user/dashboard" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'user-cog']" />
                Settings
            </Nuxt-Link>
            
            <a href="#" @click="logout" class="p-4 hover:bg-gray-100 hover:text-blue-500 rounded">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']"/>
                Logout
            </a>
            <!-- end side navigation links -->
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>