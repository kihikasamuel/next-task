<template>
    <div class="w-full grid grid-cols-6 p-0 rounded">
        <landing-sidebar />
        <landing-main />
    </div>
</template>

<script>
export default {
    middleware: 'auth',
}
</script>