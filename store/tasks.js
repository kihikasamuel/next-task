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

    removeTask(state, {task}) 
    {
        state.tasks.splice(state.tasks.indexOf(task), 1);
    },

    setLoading(state, payload)
    {
        state.loading = payload;
    }
}

export const actions = {
    async getTasks(context) {
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
    }
}