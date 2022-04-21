<template>
  <!-- modal background -->
    <div class="fixed z-10 overflow-y-auto inset-0 ">
        <div class="grid grid-cols-12 items-center justify-center pt-4 px-4">
        <!-- background overly on show/hide also has transition -->
            <div
                class="
                    fixed inset-0 flex flex-row
                    bg-gray-300 bg-opacity-75 transition-opacity
                    justify-center 
                "
                
            >
                <!-- trick your browser to center modal content -->
                <span class="sm:inline-block sm:align-middle sm:h-min">&#8203;</span>

                <!-- modal panel -->
                <div
                    class="
                        relative top-10 left-10
                        flex flex-row
                    "
                >
                <!-- transform transition-all
                        overflow-hidden shadow-xl rounded -->
                    <form class="overflow-y-auto" @submit.prevent="addTask">
                        <div 
                            class="
                                bg-white rounded pt-4 pb-4 px-4 
                                flex flex-col items-center
                                font-narrow text-lg
                            "
                        >
                            <!-- <div> -->
                            <!-- <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12"></div> -->
                                <div class="mt-3 p-4">
                                    <h1 class="text-center">Create Task</h1>
                                    <div class="mt-2 text-black-500">
                                            <label for="title" class="block">
                                                <span class="text-black">Label</span>
                                                <select 
                                                    class="
                                                        w-full
                                                        px-4 py-2
                                                        border-0 focus:outline-0
                                                    "
                                                    v-model="form.label"
                                                >
                                                    <option value="" selected disabled>Label</option>
                                                    <option>Work</option>
                                                    <option>Personal</option>
                                                </select>
                                            </label>
                                            <label for="title" class="block">
                                                <span class="text-black">Title</span>
                                                <input 
                                                    type="text" 
                                                    placeholder="title" 
                                                    required
                                                    class="
                                                        px-1 py-1
                                                        mt-2 mb-2 w-full
                                                        border-0 border-b-2 border-black
                                                        focus:outline-none
                                                    "
                                                    v-model="form.title"
                                                >
                                            </label>
                                            <label for="notes" class="block">
                                                <span class="text-black">Notes</span>
                                                <input 
                                                    type="text" 
                                                    placeholder="notes" 
                                                    required
                                                    class="
                                                        px-1 py-1
                                                        mt-2 mb-2 w-full
                                                        border-0 border-b-2 border-black
                                                        focus:outline-none
                                                    "
                                                    v-model="form.notes"
                                                >
                                            </label>
                                            <label for="title" class="block">
                                                <span class="text-black">Due on</span>
                                                <input 
                                                    type="datetime-local" 
                                                    placeholder="title" 
                                                    required
                                                    class="
                                                        px-1 py-1
                                                        mt-2 mb-2 w-full
                                                        border-0 border-b-2 border-black
                                                        focus:outline-none
                                                    "
                                                    v-model="form.scheduledon"
                                                    min="2022-04-11"
                                                    id="scheduledon"
                                                >
                                            </label>
                                            <label for="repeat" class="block">
                                                <!-- <span class="text-black">Repeat Task</span> -->
                                                <select 
                                                    class="
                                                        mt-2 mb-2 w-1/4
                                                        px-4 py-2
                                                        border-0 focus:outline-0
                                                    "
                                                    v-model="form.repeats"
                                                    required
                                                >
                                                    <option value="" selected disabled>Repeat Task?</option>
                                                    <option value="1">Yes</option>
                                                    <option value="0">No</option>
                                                </select>
                                                <!-- <span class="text-black">Repeat</span> -->
                                                <select 
                                                    class="
                                                        mt-2 mb-2 w-1/4
                                                        px-4 py-2
                                                        border-0 focus:outline-0
                                                    "
                                                    v-model="form.isreminder"
                                                >
                                                    <option value="" selected disabled>Repeat</option>
                                                    <option value="1">Daily</option>
                                                    <option value="7">Weekly</option>
                                                    <option value="28">Monthly</option>
                                                    <!-- <option value="datetime-local">Date</option> -->
                                                </select>
                                            </label>
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                        <div class="bg-white flex flex-row px-4 py-3 items-end justify-end">
                            <button type="submit" :class="{loading: 'animate-pulse'}" class="inline-flex bg-blue-200 px-5 py-2 mr-3">
                                <font-awesome-icon :class="{loading: 'animate-pulse'}" :icon="['fas', 'paper-plane']" />
                            </button>
                            <button type="button" @click="close" class="inline-flex justify-center bg-blue-200 px-5 py-2">
                                <font-awesome-icon :icon="['fas', 'times']" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            form: {
                label: '',
                title: null,
                notes: null,
                scheduledon: null,
                repeats: '',
                isreminder: '',
                assignto: this.user.username,
                company_id: this.user.companyid
            },
            loading: false,
        }
    },
    watch: {

    },
    computed:{},
    methods: {

        close() {
            this.$emit("close");
        },

        async addTask() 
        {
            this.$store.dispatch("tasks/addTask", this.form)
            .then((response) => {
                this.$toast.success(`Task saved successfully!`, {
                    action: {
                        text: 'X',
                        onClick: (e, toastObj) => {
                            toastObj.goAway(0);
                        },
                    },
                    position: 'top-center',
                    duration: 5000
                    
                })
            })
            .catch((err) => {
                this.$toast.error(`Failed to save!`, {
                    action: {
                        text: 'X',
                        onClick: (e, toastObj) => {
                            toastObj.goAway(0);
                        },
                    },
                    position: 'top-center',
                    duration: 5000
                    
                })
            })
            .finally(() => {
                this.loading = false
                this.form = {
                    label: '',
                    title: null,
                    notes: null,
                    scheduledon: null,
                    repeats: '',
                    isreminder: '',
                    assignto: this.user.username,
                    company_id: this.user.companyid
                };
            })
        }
    },

    mounted() 
    {
        // console.log(new Date().toISOString().split('T')[0])
        document.getElementById('scheduledon').setAttribute('min', new Date().toISOString().split('T')[0]);
    },


    updated() 
    {
        
    }
};
</script>