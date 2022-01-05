<template>
    <div class="grid md:grid-cols-6 p-5 font-sans text-left z-0">
        <div class="md:col-span-2 bg-white p-4 rounded-lg z-20 hover:z-50 m-4">
           <!-- label -->
           <span class="px-2 py-1 bg-purple-500 text-xs text-white rounded-full">Work</span>
           <!-- actual task -->
           <h1 class="md:mt-2">Sales Software Peach</h1>
           <!-- begin asigned to avatar's -->
           <div class="flex md:flex-row md:mt-4">
              <span class="border-2 border-gray-200 rounded-full z-10 relative right-0">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-20 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-30 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
           </div>
           <!-- end asigned to avatar's -->
        </div>
        <div class="md:col-span-2 bg-white p-4 rounded-lg z-20 hover:z-50 m-4">
           <!-- label -->
           <span class="px-2 py-1 bg-blue-500 text-xs text-white rounded-full">Personal</span>
           <!-- actual task -->
           <h1 class="md:mt-2">Code</h1>
           <!-- begin asigned to avatar's -->
           <div class="flex md:flex-row md:mt-4">
              <span class="border-2 border-gray-200 rounded-full z-10 relative right-0">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-20 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-30 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
           </div>
           <!-- end asigned to avatar's -->
        </div>
        <div class="md:col-span-2 bg-white p-4 rounded-lg z-20 hover:z-50 m-4">
           <!-- label -->
           <span class="px-2 py-1 bg-yellow-500 text-xs text-white rounded-full">Work</span>
           <!-- actual task -->
           <h1 class="md:mt-2">Sales Peach</h1>
           <!-- begin asigned to avatar's -->
           <div class="flex md:flex-row md:mt-4">
              <span class="border-2 border-gray-200 rounded-full z-10 relative right-0">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-20 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-30 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
           </div>
           <!-- end asigned to avatar's -->
        </div>
        <div class="md:col-span-2 bg-white p-4 rounded-lg z-20 hover:z-50 m-4">
           <!-- label -->
           <span class="px-2 py-1 bg-green-500 text-xs text-white rounded-full">Recreation</span>
           <!-- actual task -->
           <h1 class="md:mt-2">Go Gymn</h1>
           <!-- begin asigned to avatar's -->
           <div class="flex md:flex-row md:mt-4">
              <span class="border-2 border-gray-200 rounded-full z-10 relative right-0">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-20 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="border-2 border-gray-200 rounded-full z-30 relative">
                  <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
               </span>
               <span class="float-right">
                  <!-- <font-awesome-icon :icon="['fas', 'calendar']"/>
                  <i>{{dated}}</i> -->
               </span>
           </div>
           <!-- end asigned to avatar's -->
        </div>
    </div>
</template>

<script>
export default {
   props: ['date'],
   data() {
      return {
         dated: new Date().toDateString(),
      }
   }
}
</script>