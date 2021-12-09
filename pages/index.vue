<template>

    <div class="main">
        <!-- nav links -->
        <nuxt-link to="/auth/login">Login</nuxt-link>
        <nuxt-link to="/auth/register">Register</nuxt-link>

    </div>

</template>

<script>
export default {
    middleware: 'guest',
}
</script>
