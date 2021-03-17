<template>
  <div id="ap">
    <nav-bar/>
    <main>
      <div class="search-box mt-5">
        <input type="text"
               class="search-bar"
               placeholder="Search..."
               v-model="query"
              />
        <button class="btn btn-success mt-2" @click="fetchForecast(query)" >Search</button>
      </div>
      <div class="weather-wrap" >
        <div class="container">
        <div class="row ">
          <div>
            <div class="col lg-3 md-3 ml-2">
          <div class="location-box">
            <div class="location">{{ forecast.city.name}},{{forecast.city.country }}</div>
            <div class="weather-box">
              <div class="date">{{ forecast.list[7].dt_txt }}</div>
              <div class="temp">{{ Math.round((forecast.list[7].main.temp - 272)) }}°C</div>
              <div class="weather">{{ forecast.list[7].weather[0].description }}</div>
            </div>
          </div>
          </div>
          </div>
          <div class="col  lg-3 md-3 ml-2">
          <div class="location-box">
            <div class="location">{{ forecast.city.name}},{{forecast.city.country }}</div>
            <div class="weather-box">
              <div class="date">{{ forecast.list[15].dt_txt }}</div>
              <div class="temp">{{ Math.round((forecast.list[15].main.temp - 272)) }}°C</div>
              <div class="weather">{{forecast.list[17].weather[0].description }}</div>
            </div>
          </div>
          </div>
          <div class="col lg-3 md-3 ml-2">
          <div class="location-box">
            <div class="location">{{ forecast.city.name}},{{ forecast.city.country }}</div>
            <div class="weather-box">
              <div class="date">{{ forecast.list[23].dt_txt }}</div>
              <div class="temp">{{ Math.round((forecast.list[23].main.temp - 272)) }}°C</div>
              <div class="weather">{{ forecast.list[26].weather[0].description }}</div>
            </div>
            </div>
          </div>
          <div class="col lg-3 md-3 ml-2">
          <div class="location-box">
            <div class="location">{{ forecast.city.name}},{{ forecast.city.country }}</div>
            <div class="weather-box">
              <div class="date">{{ forecast.list[31].dt_txt }}</div>
              <div class="temp">{{ Math.round((forecast.list[31].main.temp - 272)) }}°C</div>
              <div class="weather">{{ forecast.list[34].weather[0].description }}</div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
  name: 'Main',
  components: {NavBar},
  data() {
    return {
      query: 'sofia',
    }
  },
  methods: {
    ...mapActions([
      'fetchForecast'
    ]),
  },
  computed: mapState({
    forecast: state => state.forecast,
  }),
  created() {
    this.fetchForecast(this.query)
  },
}
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monsterrat', sans-serif;
}

#ap {
  background-image: url("../assets/sun.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#ap.warm {
  background-image: url("../assets/warm-bg.jpg");
}

/*main {*/
/*  min-height: 100vh;*/
/*  padding: 25px;*/

/*  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));*/
/*}*/

/*.search-box {*/
/*  width: 100%;*/
/*  margin-bottom: 30px;*/
/*}*/

/*.search-box .search-bar {*/
/*  display: block;*/
/*  width: 100%;*/
/*  padding: 15px;*/

/*  color: #313131;*/
/*  font-size: 20px;*/

/*  appearance: none;*/
/*  border: none;*/
/*  outline: none;*/
/*  background: none;*/

/*  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);*/
/*  background-color: rgba(255, 255, 255, 0.5);*/
/*  border-radius: 0px 16px 0px 16px;*/
/*  transition: 0.4s;*/
/*}*/

/*.search-box .search-bar:focus {*/
/*  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);*/
/*  background-color: rgba(255, 255, 255, 0.75);*/
/*  border-radius: 16px 0px 16px 0px;*/
/*}*/

/*.location-box .location {*/
/*  color: #FFF;*/
/*  font-size: 32px;*/
/*  font-weight: 500;*/
/*  text-align: center;*/
/*  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);*/
/*}*/

/*.location-box .date {*/
/*  color: #FFF;*/
/*  font-size: 20px;*/
/*  font-weight: 300;*/
/*  font-style: italic;*/
/*  text-align: center;*/
/*}*/

/*.weather-box {*/
/*  text-align: center;*/
/*}*/

/*.weather-box .temp {*/
/*  display: inline-block;*/
/*  padding: 10px 25px;*/
/*  color: #FFF;*/
/*  font-size: 102px;*/
/*  font-weight: 900;*/

/*  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);*/
/*  background-color: rgba(255, 255, 255, 0.25);*/
/*  border-radius: 16px;*/
/*  margin: 30px 0px;*/

/*  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);*/
/*}*/

/*.weather-box .weather {*/
/*  color: #FFF;*/
/*  font-size: 48px;*/
/*  font-weight: 700;*/
/*  font-style: italic;*/
/*  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);*/
/*}*/

/*.navbar {*/
/*  opacity: 0.5;*/
/*}*/
/*.weather-wrap{*/
/*  width:100%*/
/*}*/
</style>
