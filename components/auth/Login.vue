<template>
  <div class="p-2 md:p-8">
    <div
      class="
        grid grid-cols-1
        md:grid-cols-1
        lg:grid-cols-1
        justify-items-center
      "
    >
      <div
        class="xs:w-full md:w-1/3 lg:w-1/4 bg-white p-5 md:p-10 rounded-2xl z-20"
      >
        <h1 class="text-center font-extrabold">Login</h1>
        <form action="" class="text-black-500 pt-4" @submit.prevent="login">
          <span class="text-blue-500 text-xs" v-if="login_err && login_err.password">
            {{ login_err.password.msg }}
          </span>
          <span class="text-blue-500 text-xs" v-if="login_err && login_err.username">
            {{ login_err.username.msg }}
          </span>
          <span class="text-red-500 text-xs" v-else>
            {{login_err}}
          </span>
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
              text-white text-xl
              rounded-full
              bg-blue-250
              hover:bg-blue-650
              focus:bg-blue-650
            "
            :class="{ 'animate-pulse': loading, 'opacity-75': loading }"
          >
            Login <i class="cursor"></i>
          </button>
          <p class="mt-3 text-center">
            <small>
              Don't have an account?
              <nuxt-link to="/auth/register" class="text-blue-650">
                Sign up
              </nuxt-link>
            </small>
          </p>
        </form>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  computed: {},
  data() {
    return {
      username: "",
      password: "",
      errors: null,
      success: false,
      loading: false,
      login_err: null
    };
  },
  methods: {
    async login() {
      this.loading = true;
      // try {
          // const response = 
          await this.$auth.loginWith("local", {
            data: {
              username: this.username,
              password: this.password,
            },
          })
          .then((response) => {
            this.$toast.success("Logged in successfully!", {
              action: {
                text: "X",
                onClick: (e, toastObj) => {
                  toastObj.goAway(0);
                },
              },
              position: "top-center",
              duration: 7000,
            });
            this.$router.replace("/user/dashboard");
          })
          .catch((error) => {
            console.log(error);
            if(error.response.data) {
              this.login_err = error.response.data.errors;
            }
          })
          .finally(() => {
            this.loading = false;
          });
      // }catch (error) {
      //   // console.log(error)
      //   if(error.response.data) {
      //       this.errors = error.response.data.errors;
      //       // console.log(this.errors);
      //   }
      // }
    },
  },
};
</script>

