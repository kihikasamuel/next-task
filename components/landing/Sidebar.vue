<template>
    <section class="col-span-1 bg-white-500 z-index-10 p-4 rounded shadow-blue-500">
        <div class="mb-7 p-4 sticky top-0">
            <font-awesome-icon :icon="['fas', 'check-circle']" />
            <strong class="">NextTask</strong>
        </div>
        <div class="flex flex-col content-center w-full overflow-y-auto">
            <!-- <div class="mb-7 p-4">
                <font-awesome-icon :icon="['fas', 'check-circle']" />
                <strong class="">NextTask</strong>
            </div> -->

            <!-- start side navigation links -->
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'home']" />
                <Nuxt-Link to="/user/dashboard">Dashboard</Nuxt-Link>
            </div>
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'tasks']" />
                <Nuxt-Link to="/user/dashboard">Tasks</Nuxt-Link>
            </div>
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'project-diagram']" />
                <Nuxt-Link to="/user/dashboard">Projects</Nuxt-Link>
            </div>
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'users']" />
                <Nuxt-Link to="/user/dashboard">Teams</Nuxt-Link>
            </div>
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'calendar']" />
                <Nuxt-Link to="/user/dashboard">Calendar</Nuxt-Link>
            </div>
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'user-cog']" />
                <Nuxt-Link to="/user/dashboard">Settings</Nuxt-Link>
            </div>
            <div class="p-4 hover:bg-gray-400 hover:text-black-500 rounded">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                <a href="#" @click="logout">Logout</a>
            </div>
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