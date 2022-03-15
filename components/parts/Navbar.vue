<template>
    <nav class="grid grid-cols-12 w-full p-5 bg-gray-200 rounded">
            <div class="col-span-3 xs:col-span-12">
                <div class="flex flex-row float-left">
                    <nuxt-link
                        to="/"
                        class="
                            text-black font-bold
                            hover:text-indigo-700
                        "
                    >
                        Diary.com
                    </nuxt-link>
                </div>
            </div>
            <div class="col-span-9 xs:col-span-12">
                <ul class="flex lg:flex-row md:flex-row xs:flex-row float-right">
                    <li class="pr-4 xs:pr-2 text-black font-bold hover:text-indigo-700">
                        <nuxt-link 
                            to="/auth/login" 
                            class="
                                px-2 py-3
                            "
                        >
                        Home
                        </nuxt-link>
                    </li>
                    <li class="pr-10 xs:pr-2 text-black font-bold hover:text-indigo-700">
                        <nuxt-link 
                            to="/auth/login" 
                            class="
                                px-2 py-3
                            "
                        >
                        Pricing
                        </nuxt-link>
                    </li>
                    <li class="pr-10 xs:pr-2 text-black font-bold hover:text-indigo-700 hover-">
                        <nuxt-link 
                            to="/auth/login" 
                            class="
                                px-2 py-3
                                border-2 border-blue-500
                                hover:border-blue-200
                                rounded
                            "
                        >
                        Login
                        </nuxt-link>
                    </li>
                    <li class="pr-10 xs:pr-2 text-white font-bold hover:text-gray-100">
                        <nuxt-link 
                            to="/auth/register"
                            class="
                                px-2 py-3 bg-blue-600
                                border-2 border-blue-500
                                hover:border-blue-200
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