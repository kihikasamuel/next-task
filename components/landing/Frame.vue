<template>
    <div class="p-5 mt-4 font-sans bg-white main-col">
        
        <!-- begin task list -->
        <div v-if="tasks.length > 0" class="md:grid md:grid-cols-6 sm:flex sm:flex-col bg-white p-4 rounded-lg">
            
            <!-- task container -->
            <div @dblclick="modifyTask(task)" class="md:col-span-2 border-2 border-gray-100 p-4 m-4 shadow-xl shadow-orange-800 rounded cursor-pointer" v-for="task in tasks" :key="task.id">
               
                <!-- task label -->
                <div class="flex flex-row place-content-between cursor-pointer">
                    <span 
                        :class="{
                            'bg-yellow-500':task.status=='Pending', 
                            'bg-green-500':task.status==='Completed'
                        }" 
                        class="px-2 py-1 text-xs text-white rounded-md"
                    >
                        {{task.label}}
                    </span>
                    <div class="dropstart">
                        <!-- <a 
                            class="px-2" 
                            type="button" 
                            :id="`dropdownMenuButton1-${task.id}`"
                        >
                            <font-awesome-icon :icon="['fas', 'ellipsis-h']" @click="showActions"/>
                        </a> -->
                        <a
                            class="
                                text-sm
                                font-normal
                                block
                                w-full
                                whitespace-nowrap
                            "
                            :id="`dropdownMenuButton1-${task.id}`"
                            type="button"
                            href="#"
                            @click="showActions"
                        >
                            <font-awesome-icon class="block" @click.prevent="" :icon="['fas', 'ellipsis-h']"/>
                        </a>
                        <!-- actions on tasks -->
                        <ul
                            class="
                                dropdown-menu
                                min-w-max
                                hidden
                                absolute
                                bg-white
                                text-base
                                z-50
                                float-right
                                py-2
                                list-none
                                text-left
                                rounded-lg
                                shadow-lg
                                mt-1
                                m-0
                                bg-clip-padding
                                border-none
                            "
                            :aria-labelledby="`dropdownMenuButton1-${task.id}`"
                        >
                            <li>
                                <a
                                    class="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        text-gray-700
                                        hover:bg-gray-100
                                    "
                                    href="#"
                                    @click.prevent="modifyTask(tasks)"
                                >
                                    Edit
                                </a>
                            </li>
                            <li>
                                <a
                                    class="
                                        dropdown-item
                                        text-sm
                                        py-2
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        
                                        text-gray-700
                                        hover:bg-gray-100
                                    "
                                    href="#"
                                    @click.prevent="deleteTask(task.id)"
                                >
                                    Delete
                                </a>
                            </li>
                        </ul>
                        <!-- actions on tasks -->
                    </div>
                </div>
                
                <!-- task details -->
                <div id="content">
                    <h1 class="md:mt-2">{{task.title}}</h1>
                    <p class="text-sm text-gray-400">{{task.notes}}</p>
                </div>

                <!-- task assigned to -->
                <div class="flex flex-row md:mt-4 place-content-between">
                    <span class="flex flex-row">
                        <i class="border-2 border-gray-200 rounded-full">
                            <img src="~assets/imgs/avatar.png" class="w-8 h-8" alt="">
                        </i>
                    </span>

                    <!-- task due date -->
                    <span class="text-gray-600 text-xs font-bold flex flex-row">
                        <font-awesome-icon :icon="['fas', 'calendar']" class="pr-1"/>
                        <span>
                            {{new Date(new Date(task.scheduled_on).toDateString()).toLocaleString('en-us', {weekday:'short'})}}
                            {{new Date(task.scheduled_on).getDate()}} {{new Date(new Date(task.scheduled_on)).toLocaleString('en-us', {month:'short'})}}
                            <!-- {{new Intl.DateTimeFormat('en-us', {month:'short'}).format(new Date(task.scheduled_on))}} -->
                        </span>
                    </span>
                </div>
            </div>            
        </div>
        <!-- end task container -->

        <!-- while no task -->
        <div v-else class="md:col-span-6 bg-white p-4 rounded-lg m-4 text-center">
            <!-- task label -->
            <p v-if="!loading" class="font-narrow font-bold text-lg">
                You have no NexTask to view! Go ahead and schedule one.
            </p>
            <p v-else class="font-narrow font-bold text-lg animate-ping">
                Loading...
            </p>
        </div>
        <!-- while no task -->

        <!-- BEGIN Modal -->
        <landing-edittaskmodal
            v-show="isEditModalVisible"
            @close="closeEditModal"
            :task="selectedTask"
        />
        <!-- END Modal -->

    </div>
</template>

<script>
export default {
    props: ['loading'],
    data() 
    {
        return {
            dated: new Date().toDateString(),
            isEditModalVisible: false,
            selectedTask: {},
        }
    },
    watch: {
        
    },
    computed: {
        tasks() 
        {
            return this.$store.state.tasks.tasks;
            // return this.$store.getters['tasks/getTasks'];
        }
    },
    beforeMount() 
    {
        this.$store.dispatch("tasks/getTasks");
    },
    updated() 
    {
        // this.$store.dispatch("tasks/getTasks");
        this.$store.getters['tasks/getTasks'];
    },
    methods: {
        showActions(e)
        {
            const target_id = e.target.parentNode.id;
            const el = document.querySelector(`[aria-labelledby="${target_id}"]`);
            try {
                el.classList.remove('hidden');
                setInterval(() => {
                    el.classList.add('hidden')
                }, 1000)
            } catch (error) {
                console.log(error);
            }
            
        },

        modifyTask()
        {
            this.isEditModalVisible = true;
            this.selectedTask = arguments[0];
        },

        closeEditModal() 
        {
            this.isEditModalVisible = false;
        },

        async deleteTask()
        {
            let task_id = arguments[0]
            this.$toast.show('Loading..', {
                duration: 500,
            });
            await this.$store.dispatch("tasks/removeTask", task_id)
            .then((result) => {
                this.$toast.success('Deleted Successfuly', {
                    iconPack: ['fontawesome'],
                    Icon: 'check',
                    action: {
                        text: 'X',
                        onClick: (e, toastObj) => {
                            toastObj.goAway(0);
                        }
                    },
                    position: 'top-center',
                    duration: 7000,
                    singleton: true,
                });
            })
            .catch((err) => {
                this.$toast.error('Could not delete. Try again later!', {
                    iconPack: ['fontawesome'],
                    Icon: 'check',
                    action: {
                        text: 'X',
                        onClick: (e, toastObj) => {
                            toastObj.goAway(0);
                        }
                    },
                    position: 'top-center',
                    duration: 7000,
                    singleton: true,
                })
            })
        }
    },
    
}
</script>

<style scoped>
.main-col 
{
    min-height: 100vh;
}
</style>