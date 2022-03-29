<template>
    <div class="grid grid-cols-12 flex flex-row justify-items-center pt-10 pb-10 font-narrow">
            <div class="col-span-4 flex flex-col">
                <Nuxt-Link 
                    to="/"
                    class="
                        text-black font-narrow font-bold text-3xl
                        hover:text-indigo-700 p-2
                    "
                >
                    <font-awesome-icon :icon="['fas', 'check-circle']" />
                    <strong class="md">NexTask</strong>
                </Nuxt-Link>
                <p>Where productivity begins.</p>
            </div>
            <div class="col-span-2 flex flex-col">
                <h1 class="font-bold">Quick Links</h1>
                <Nuxt-Link to="/" class="p-2">Home</Nuxt-Link>
                <Nuxt-Link to="/" class="p-2">About</Nuxt-Link>
                <Nuxt-Link to="/" class="p-2">Pricing</Nuxt-Link>
            </div>
            <div class="col-span-2 flex flex-col">
                <h1 class="font-bold">Support</h1>
                <Nuxt-Link to="#/contacts" class="p-2">Contacts</Nuxt-Link>
            </div>
            <div class="col-span-4 flex flex-col">
                <h1 class="font-bold">Highlight</h1>
                <p class="p-2">NexTask is an easy way to set reminders for your tasks.</p>
                <p class="p-2">Achieve maximum productivity by scheduling.</p>
            </div>
    </div>
</template>

<style scoped>

</style>