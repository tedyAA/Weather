import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: () => ({
        weather: {},
        forecast: {},
        api_key: '1cf838aa8644549473bdf55ad4147ca1',
        url_base: 'https://api.openweathermap.org/data/2.5/',
        url_base2: 'https://api.openweathermap.org/data/2.5/',
        location: '',
        locations: {},
    }),
    mutations: {
        setWeather(state, results) {
            state.weather = results
        },
        setForecast(state, results) {
            state.forecast = results
            console.log(state.forecast)
        },
    },
    actions: {

        async fetchWeather({commit}, query) {
            const response = await axios.get(`${this.state.url_base}weather?q= ${query}&units=metric&APPID=${this.state.api_key}`)
            console.log(response.data)
            commit('setWeather', response.data)
        },
        async fetchForecast({commit},query) {
            const response = await axios.get(`${this.state.url_base2}forecast?q=${query}&appid=${this.state.api_key}`)
            commit('setForecast', response.data)
            console.log(response.data)
        },
    }

})