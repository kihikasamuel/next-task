<template>
    <div class="w-full grid md:grid-cols-6 p-0 rounded overflow-none" v-if="isAuthenticated">        
        <landing-sidebar/>
        <landing-main :loggedinuser="user" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    middleware: 'auth',
    data() {
        return {
            user: this.$auth.$state.user,
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
    mounted() {
        console.log(this.user);
    }
}
</script>