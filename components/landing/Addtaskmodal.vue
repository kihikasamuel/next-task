<template>
    <div id="modal-backdrop" class="justify-self-center brightness-0 drop-shadow-2xl z-1000 sticky top-0 left-0">
        <div id="modal" class="w-1/4 h-1/4 bg-white text-black-500 text-center flex md:flex-col">
            <header class="modal-header">
                <slot name="header">
                    Add New Task
                </slot>
                <button class="bg-red-100 px-2 py-2 absolute top-0 rounded-2xl" @click="close">
                    x
                </button>
            </header>

            <section class="modal-body">
                <slot name="body">
                    Hello You
                </slot>
            </section>

            <footer class="modal-footer">
                <slot name="footer">
                </slot>
                <button class="bg-red-100 p-2 rounded-full" @click="close">
                    x
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>