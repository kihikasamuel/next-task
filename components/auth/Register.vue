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
                class="w-full md:w-1/2 lg:w-1/3 bg-white p-10 md:p-20 rounded-2xl z-20"
            >
                <h1 class="text-center font-extrabold">REGISTER</h1>
                <form action="" class="text-black-500 pt-4" @submit.prevent="signUp">
                    <label for="name" class="block">
                        <span class="text-black-100">Full name</span>
                        <input
                        type="text"
                        v-model="register.fullname"
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
                        required
                        />
                        <span class="text-red-500 text-xs" v-if="errors && errors.full_name">
                            {{errors.full_name.msg}}
                        </span>
                    </label>
                    <label for="username" class="block">
                        <span class="text-black-100">Username</span>
                        <input
                        type="email"
                        v-model="register.username"
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
                        <span class="text-red-500 text-xs" v-if="errors && errors.username">
                            {{errors.username.msg}}
                        </span>
                    </label>
                    <label for="password" class="block">
                        <span class="text-black-100">Password</span>
                        <input
                        type="password"
                        v-model="register.password"
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
                        <span class="text-red-500 text-xs" v-if="errors && errors.password">
                            {{errors.password.msg}}
                        </span>
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
                                border-0 border-b-2 border-gray-500
                                focus:outline-none
                        "
                        :class="{'border-red-500': isError, 'border-green-500': isError}"
                        required
                        />
                    </label>
                    <label for="checkbox">
                        <input
                        type="checkbox"
                        v-model="register.signed_terms"
                        name="terms"
                        id=""
                        class="rounded"
                        required
                        />
                        <span class="text-black-100"
                        >I agree to
                            <a class="text-green-500" href="/terms-of-service"
                                >the terms of service</a
                            >
                        </span>
                        <span class="text-red-500 text-xs" v-if="errors && errors.signed_terms">
                            {{errors.signed_terms.msg}}
                        </span>
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
                        :class="{}"
                    >
                        Submit
                    </button>
                    <p class="mt-3 text-center">
                        <small>
                            Have an account?
                            <nuxt-Link to="/auth/login" class="text-blue-650">
                                Sign in
                            </nuxt-Link>
                        </small>
                    </p>
                </form>
            </div>
            <Nuxt />
        </div>
    </div>
</template>

<script>
// import axios from 'vue-axios';
export default {
    middleware: 'guest',
    data() {
        return {
            register: {
                fullname: "",
                username: "",
                password: "",
                signed_terms: "",
            },
            confirm_password: "",
            isError: false,
            errors: null,
            loading: false
        };
    },
    methods: {
        async signUp() {
            if(this.register.password !== this.confirmPassword) {
                this.loading = true;
                try {

                    const user = await this.$axios.$post('/api/users/register', {
                        full_name: this.register.fullname,
                        username: this.register.username,
                        password: this.register.password,
                        signed_terms: this.register.signed_terms
                    })
                    .then((user)=>{
                        this.$toast.success(user.message,{
                            action: {
                                text: 'X',
                                onClick:(e, toastObj) => {
                                toastObj.goAway(0);
                                }
                            },
                            position: 'top-center',
                            duration: 7000
                        });
                    })
                    .then(()=>{
                        setTimeout(()=>{
                            const response = this.$auth.loginWith("local", {
                                data: {
                                    username: this.username,
                                    password: this.password,
                                }
                            });
                        })
                    })
                    .then((response)=>{
                        this.$toast.success('Logged In!',{
                            action: {
                                text: 'X',
                                onClick:(e, toastObj) => {
                                toastObj.goAway(0);
                                }
                            },
                            position: 'top-center',
                            duration: 7000
                        });
                        this.$router.replace('/user/dashboard');
                    })
                    .finally(()=>{
                        this.loading = false;
                    })

                } catch (error) {

                    // console.log(error);
                    if(error.response.data.errors) {
                        this.errors = error.response.data.errors;
                    }

                }
            }
            else {
                this.isError = false;
            }
        }
    },
};
</script>
