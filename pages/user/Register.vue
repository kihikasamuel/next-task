<template>
  <div class="p-2 md:p-8 cont">
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center"
    >
      <div class="w-full md:w-1/2 lg:w-1/3 bg-white p-10 md:p-20 rounded-2xl z-20">
        <h1 class="text-center font-extrabold">REGISTER</h1>
        <form action="" class="text-black-500 pt-4">
          <label for="name" class="block">
            <span class="text-black-100">Full name</span>
            <input
              type="text"
              v-model="fullname"
              class="
                mt-3
                mb-3
                block
                w-full
                px-0.5
                py-1
                text-gray-500
                rounded-r
                border-b-2 border-0 border-gray-300
                focus:border-gray-600 focus:outline-none
              "
              placeholder="Sam Reese"
            />
          </label>
          <label for="username" class="block">
            <span class="text-black-100">Username</span>
            <input
              type="email"
              v-model="username"
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
          <label for="password" class="block">
            <span class="text-black-100">Password</span>
            <input
              type="password"
              v-model="password"
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
              required
            />
          </label>
          <label for="password" class="block">
            <span class="text-black-100">Confirm password</span>
            <input
              type="password"
              v-model="confirm_password"
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
            />
          </label>
          <label for="checkbox">
            <input type="checkbox" v-model="signed_terms" name="terms" id="" class="rounded" />
            <span class="text-black-100">I agree to <a class="text-green-500" href="/terms-of-service">the terms of service</a></span>
          </label>
          <button
            type="submit"
            class="
              mt-3
              w-full
              px-3
              py-2
              rounded-full
              bg-blue-250
              hover:bg-blue-650 focus:bg-blue-650
            "
          >
            Submit
          </button>
          <p class="mt-3 text-center"><small>Have an account? <Nuxt-Link to="/login" class="text-blue-650">Sign in</Nuxt-Link></small></p>
        </form>
      </div>
      <Nuxt :nuxtChildKey="userRegister"/>
    </div>
  </div>
</template>

<script>
// import axios from 'vue-axios';
export default {
  userRegister(router) {
    return router.fullPath;
  },
  data() {
    return {
      fullname: this.fullname,
      username: this.username,
      password:this.password,
      confirm_password: this.confirmPassword,
      signed_terms: this.signed_terms
    }
  },
  methods: {
    // this
  }
}
</script>
