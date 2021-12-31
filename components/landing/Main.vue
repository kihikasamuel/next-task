<template>
  <section
    class="md:col-span-5 cont z-0 rounded overflow-y-none p-4 scroll-none"
  >
    <div class="">

        <!-- BEGIN row 1 -->
        <div class="grid md:grid-cols-6 px-4">

            <!-- search begin-->
            <div class="md:col-span-4">
                <label for="search">
                    <span></span>
                    <input
                        type="search"
                        class="
                            w-3/4
                            px-3 py-2
                            rounded-md
                            text-gray-400
                            border-2 border-gray-200
                            focus:outline-none
                        "
                        placeholder="Search tasks, teams, schedules.."
                        autocomplete="on"
                    />
                </label>
            </div>
            <!-- search ends -->
            
            <!-- avatar begins -->
            <div class="md:col-span-2">
                <div class="float-right p-3 border-2 border-gray-100 rounded-full">
                    <span class="rounded-2xl border-2 border-gray-200 ring-2 mr-2">
                        <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                    </span>
                    <span class="text-xs">
                        {{loggedinuser.fullname}}
                    </span>
                </div>
            </div>
            <!-- avatar ends -->
        </div>
      <!-- END of row 1 -->

    </div>
  </section>
</template>
<script>
export default {
    middleware: 'auth',
    props:['loggedinuser'],
}
</script>