import axios from '@nuxtjs/axios';

export const state = () => ({
    tasks: [],
    loading: false
})

export const getters = {
    getTasks: (state) => {
        return state.tasks;
    },
    getLoading: (state) => {
        return state.loading;
    }
}

export const mutations = {
    setTask(state, payload)
    {
        state.tasks = payload;
    },
    updateTasks(state, task) 
    {
        state.tasks.push(task);
    },

    deleteTask(state, taskId) 
    {
        let exists = [];
        state.tasks = state.tasks.filter((task) => {
            if(task.id !== taskId)
            {
                exists.push(task);
            }
            return exists;
        });

    },

    setLoading(state, payload)
    {
        state.loading = payload;
    }
}

export const actions = {

    // fetch all tasks
    async getTasks(context) 
    {
        context.commit('setLoading', true);
        
        await this.$axios.get('http://localhost:3000/api/tasks/all')
        .then((response) => {
            context.commit('setTask', response.data);
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            context.commit('setLoading', false);
        })
    },

    // add a tasks
    async addTask(context, payload) 
    {
        context.commit('setLoading', true);

        await this.$axios.post('http://localhost:3000/api/tasks/add', payload)
        .then((result) => {
            context.commit('updateTasks', result.data.newTask);
        })
    },

    // remove a task
    async removeTask(context, taskId) 
    {
        context.commit('setLoading', true);

        await this.$axios.delete(`http://localhost:3000/api/tasks/${taskId}`).
        then((result) => {
            context.commit('deleteTask', result.data.taskId);
        })
    }
}