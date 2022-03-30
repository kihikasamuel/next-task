<template>
    <!-- modal background -->
    <div class="fixed z-10 overflow-y-auto inset-0">
        <div class="flex items-end justify-center pt-4 px-4 pb-20 min-h-screen">
            <!-- background overly on show/hide also has transition -->
            <div class="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity">
                <!-- trick your browser to center modal content -->
                <span class="sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

                <!-- modal panel -->
                <div class="relative inline-block grid bg-white  text-left overflow-hidden shadow-xl">
                    <div class="bg-white pt-4 pb-4 px-4">
                        <div>
                            <!-- <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12"></div> -->
                            <div class="mt-3 text-center">
                                <h1>Modal</h1>
                                <div class="mt-2 text-black-500">
                                    <p>Are you ready for this?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-300 px-4 py-3">
                        <button class="inline-flex justify-center bg-blue-200 px-5 py-2">
                            <font-awesome-icon :icon="['fas', 'paper-plane']"/>
                        </button>
                        <button class="inline-flex justify-center bg-blue-200 px-5 py-2">
                            <font-awesome-icon :icon="['fas', 'times']"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>