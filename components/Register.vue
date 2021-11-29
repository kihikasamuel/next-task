<template>
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center">
            <div class="w-1/3 bg-white p-20 rounded-2xl z-20">
                <h1 class="text-center">REGISTER</h1>
                <form action="" class="text-black-500 pt-4">
                    <label for="name" class="block">
                        <span class="text-gray-500">Full name</span>
                        <input type="text" placeholder="Sam Dev" class="mt-3 mb-3 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black">
                    </label>
                    <label for="username" class="block">
                        <span class="text-gray-500">Username</span>
                        <input type="email" placeholder="sam@dev.com" class="mt-3 mb-3 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black">
                    </label>
                    <label for="password" class="block">
                        <span class="text-gray-500">Password</span>
                        <input type="password" class="mt-3 mb-3 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black">
                    </label>
                    <label for="password" class="block">
                        <span class="text-gray-500">Confirm password</span>
                        <input type="password" class="mt-3 mb-3 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black">
                    </label>
                    <label for="checkbox">
                        <input type="checkbox" name="terms" id="" class="">
                        <span>I agree to the terms of service</span>
                    </label>
                    <button type="submit" class="w-full mt-3 bg-blue-300 hover:bg-blue-500 px-3 py-2 rounded-full">Submit</button>
                </form>
            </div>
        </div>
</template>