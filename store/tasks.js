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
    addTask(state, task) 
    {
        state.tasks.push(task);
    },

    removeTask(state, taskId) 
    {
        state.tasks.filter((items) => items.id !== taskId);
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
            context.commit('addTask', payload);
        })
    },

    // remove a task
    async removeTask(context, taskId) 
    {
        context.commit('setLoading', true);

        await this.$axios.delete(`http://localhost:3000/api/tasks/?id=${taskId}`).
        then((result) => {
            context.commit('removeTask', taskId);
        })
    }
}