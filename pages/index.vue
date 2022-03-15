<template>

    <div class="main">
        <header-navbar/>
        <parts-banner/>
    </div>

</template>

<script>
export default {
    middleware: 'guest',
}
</script>

<style scoped>
.main 
{
    background-image: linear-gradient(to right top, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8, #d0e8f8);
}
</style>
