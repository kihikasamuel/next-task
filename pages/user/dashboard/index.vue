<template>
    <div class="w-full grid grid-cols-6 p-0 rounded overflow-none">
        <landing-sidebar />
        <landing-main />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    middleware: 'auth',
    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser'])
    }
}
</script>