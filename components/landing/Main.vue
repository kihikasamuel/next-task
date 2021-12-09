<template>
    <section class="cont">
        <h1 class="text-black-500" v-if="isAuthenticated">
            {{loggedInUser.username}}
        </h1>
        <a href="#" @click.prevent="logout" class="">Logout</a>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    },
    methods: {
        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>