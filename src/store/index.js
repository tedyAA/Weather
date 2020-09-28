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
        locations: {},
        api_key: '1cf838aa8644549473bdf55ad4147ca1',
        url_base: 'https://api.openweathermap.org/data/2.5/',
    }),
    mutations: {
        setWeather(state, results) {
            state.weather = results
        },
        setForecast(state, results) {
            state.forecast = results
            console.log(state.forecast)
        },
        saveWeather(state){
            let loc = state.weather
            state.locations=loc
            console.log(state.locations)
        }
    },
    actions: {

        async fetchWeather({commit}, query) {
            const response = await axios.get(`${this.state.url_base}forecast?q=${query}&appid=${this.state.api_key}`)
            console.log(response.data)
            commit('setWeather', response.data)
        },
        async fetchForecast({commit},query) {
            const response = await axios.get(`${this.state.url_base}forecast?q=${query}&appid=${this.state.api_key}`)
            commit('setForecast', response.data)
            console.log(response.data)
        },
        async saveWeather({commit}){
            commit('saveWeather')
        }
    }

})