<template>
  <div class="p-2 md:p-8 cont">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-1
        lg:grid-cols-1
        justify-items-center
      "
    >
      <div
        class="w-full md:w-1/3 lg:w-1/4 bg-white p-5 md:p-10 rounded-2xl z-20"
      >
        <h1 class="text-center font-extrabold">Login</h1>
        <form action="" class="text-black-500 pt-4" @submit.prevent="login">
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
          <button
            type="submit"
            class="
              mt-3
              w-full
              px-3
              py-2
              rounded-full
              bg-blue-250
              hover:bg-blue-650
              focus:bg-blue-650
            "
          >
            Submit
          </button>
          <p class="mt-3 text-center">
            <small
              >Have an account?
              <Nuxt-Link to="/login" class="text-blue-650"
                >Sign in</Nuxt-Link
              ></small
            >
          </p>
        </form>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {

        let response = await this.$auth.loginWith("local", {
          data: {
            username: this.username,
            password: this.password,
          }
        });

        // this.$axios.setHeader('Authorization', `Bearer ${response.data.token}`)
        this.$router.push("/home");
        console.log(response);

      } catch (error) {

        console.error(error);
        
      }
    },
  },
};
</script>

