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
                            rounded-md
                            px-3 py-2
                            focus:outline-none
                            text-gray-400
                            mr-3
                            col-span
                        "
                        placeholder="Search tasks, teams, schedules.."
                        autocomplete="of"
                    />
                </label>
            </div>
            <!-- search ends -->
            
            <!-- avatar begins -->
            <div class="md:col-span-2">
                <div class="float-right">
                    <span class="text-xs">
                    {{loggedinuser.fullname}}
                </span>
                <span class="w-1/2 h-1/2 rounded-full border-2 b border-black p-2">

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