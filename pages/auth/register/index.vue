<template>
    <div class="main">
        <header-navbar />
        <auth-register />
    </div>
</template>

<script>
export default {
    middleware: 'guest',
}
</script>