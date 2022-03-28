<template>
    <nav class="grid grid-cols-12 w-full p-5 rounded sticky z-100 top-0">
            <div class="col-span-3 xs:col-span-12 md:ml-20 pl-4 text-center">
                <div class="flex flex-row col-span-12 float-left">
                    <nuxt-link
                        to="/"
                        class="
                            text-black font-narrow font-bold text-3xl
                            hover:text-indigo-700
                        "
                    >
                        <font-awesome-icon :icon="['fas', 'check-circle']" />
                        <strong class="md">NexTask</strong>
                        <!-- DIARY<font-awesome-icon :icon="['fas','calendar-check']"/> -->
                        
                    </nuxt-link>
                </div>
            </div>
            <div class="col-span-9 xs:col-span-12 ">
                <ul class="flex lg:flex-row md:flex-row xs:flex-row float-right">
                    <li class="pr-4 xs:pr-2 text-black">
                        <nuxt-link 
                            to="/" 
                            class="
                                px-2 py-3
                                hover:bg-blue-500
                                rounded
                            "
                        >
                        Home
                        </nuxt-link>
                    </li>
                    <li class="pr-10 xs:pr-2 text-black">
                        <nuxt-link 
                            to="/" 
                            class="
                                px-2 py-3
                                hover:bg-blue-500
                                rounded
                            "
                        >
                        Pricing
                        </nuxt-link>
                    </li>
                    <li class="pr-10 xs:pr-2 text-black">
                        <nuxt-link 
                            to="/auth/login" 
                            class="
                                px-2 py-3
                                border-2 border-blue-300
                                hover:border-blue-600
                                rounded
                            "
                        >
                        Login
                        </nuxt-link>
                    </li>
                    <li class="pr-10 xs:pr-2 text-white hover:text-gray-100">
                        <nuxt-link 
                            to="/auth/register"
                            class="
                                px-2 py-3 bg-blue-500
                                border-2 border-blue-300
                                hover:border-blue-600
                                rounded
                            "
                        >
                        Register
                        </nuxt-link>
                    </li>
                </ul>
            </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
nav {
    margin-bottom: 50px;
    /* background-image: linear-gradient(to right top, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8); */
    /* background-image: linear-gradient(to right top, #23e7b3, #23ebb3, #24efb3, #26f2b3, #28f6b3, #28f7b2, #28f8b1, #28f9b0, #25f8ae, #22f7ac, #1ff5aa, #1cf4a8); */
    /* background-image: linear-gradient(to right top, #649fc6, #62a3ca, #61a8cd, #5facd0, #5eb1d3, #5fb3d3, #60b6d3, #61b8d3, #64b9d0, #68bace, #6bbacb, #6fbbc9); */
}

li a.nuxt-link-exact-active {
    /* color: rgba(200, 00, 255, 0.9); */
    background: rgba(250, 4, 250, 0.7);
}
</style>