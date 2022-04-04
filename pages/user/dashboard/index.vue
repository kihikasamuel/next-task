<template>

    <div 
        class="grid md:grid-cols-6 p-0 rounded w-full" 
        v-if="isAuthenticated"
    >        
        <landing-sidebar/>
        <landing-main :loggedinuser="loggedInUser" />

    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    middleware: 'auth',
    data() {
        return {
            // user: this.$auth.$state.user,
        }
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),
    },
    mounted() {
        //
    }
}
</script>