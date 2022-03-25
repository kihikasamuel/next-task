<template>
    <div class="main">
        <header-navbar />
        <auth-login />
    </div>
</template>
<script>
export default {
    middleware: 'guest',
}
</script>

<style scoped>

</style>