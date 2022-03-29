<template>
    <div 
        id="modal-backdrop" 
        class="
            grid grid-cols-4
            brightness-0 drop-shadow-2xl z-100
            relative top-0
        "
    >
        <div id="modal" class="col-span-3 bg-blue-500 text-black-500 flex flex-col">
            <header class=" modal-header flex flex-row justify-center">
                <h1 class="text-center font-extrabold">Login</h1>
                <!-- <button class="bg-red-100 px-2 py-2 top-0 rounded-2xl float-right" @click="close">
                    x
                </button> -->
            </header>

            <section class="modal-body ">
                <form class="flex flex-col">
                    <label for="username" class="block">
                        <span class="text-black-100">Username</span>
                        <input
                            type="email"
                            class="
                            mt-3
                            mb-3
                            block
                            w-full
                            px-0.5
                            py-1
                            text-gray-500
                            rounded-r
                            border-0 border-b-2 border-gray-300
                            focus:border-gray-600 focus:outline-none
                            "
                            placeholder="coolemail@xyz.com"
                            required
                        />
                    </label>
                    <label for="username" class="block">
                        <span class="text-black-100">Username</span>
                        <input
                            type="email"
                            class="
                            mt-3
                            mb-3
                            block
                            w-full
                            px-0.5
                            py-1
                            text-gray-500
                            rounded-r
                            border-0 border-b-2 border-gray-300
                            focus:border-gray-600 focus:outline-none
                            "
                            placeholder="coolemail@xyz.com"
                            required
                        />
                    </label>
                    <label for="username" class="block">
                        <span class="text-black-100">Username</span>
                        <input
                            type="email"
                            class="
                            mt-3
                            mb-3
                            block
                            w-full
                            px-0.5
                            py-1
                            text-gray-500
                            rounded-r
                            border-0 border-b-2 border-gray-300
                            focus:border-gray-600 focus:outline-none
                            "
                            placeholder="coolemail@xyz.com"
                            required
                        />
                    </label>
                </form>
            </section>

            <footer class="modal-footer w-full flex flex-row justify-end">
                <button class="bg-blue-300 px-4 py-2 mr-3 rounded" @click="close">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" />
                    <span class="sm">Submit</span>
                </button>
                <button class="bg-red-400 px-4 py-2 rounded" @click="close">
                    <font-awesome-icon :icon="['fas', 'times']" />
                    <span class="sm">Close</span>
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>