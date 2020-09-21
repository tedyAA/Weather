<template>
  <div id="ap">
    <nav-bar/>
    <main>
      <div class="search-box mt-5">
        <input type="text"
               class="search-bar"
               placeholder="Search..."
               v-model="query"
               @keypress="fetchWeather"/>
      </div>
      <div class="weather-wrap" v-if="clicked">
        <div class="row ">
          <div class="location-box ml-4 mb-3">
            <div class="location">{{ city1.name }},{{ city1.country }}</div>
            <div class="weather-box">
              <div class="date">{{ weather1.dt_txt }}</div>
              <div class="temp">{{ Math.round(this.temp1 - 273) }}°C</div>
            </div>
          </div>
          <div class="location-box ml-4 mb-3">
            <div class="location">{{ city1.name }},{{ city1.country }}</div>
            <div class="weather-box">
              <div class="date">{{ weather2.dt_txt }}</div>
              <div class="temp">{{ Math.round(this.temp2 - 273) }}°C</div>

            </div>
          </div>
          <div class="location-box ml-4 mb-3">
            <div class="location">{{ city1.name }},{{ city1.country }}</div>
            <div class="weather-box">
              <div class="date">{{ weather3.dt_txt }}</div>
              <div class="temp">{{ Math.round(this.temp3 - 273) }}°C</div>

            </div>
          </div>
          <div class="location-box ml-4 mb-3">
            <div class="location">{{ city1.name }},{{ city1.country }}</div>
            <div class="weather-box">
              <div class="date">{{ weather4.dt_txt }}</div>
              <div class="temp">{{ Math.round(this.temp4 - 273) }}°C</div>

            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'Main',
  components: {NavBar},
  data() {
    return {
      api_key: '78546815f312ddf800574501b081cb11',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      weather1: '',
      weather2: '',
      weather3: '',
      weather4: '',
      weather5: '',
      temp1: '',
      temp2: '',
      temp3: '',
      temp4: '',
      temp5: '',
      city1: {},
      clicked:false
    }
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}forecast?q=${this.query}&appid=${this.api_key}`)
            .then(res => {
              return res.json();
            }).then(this.setResults);
        this.clicked=true
      }

    },
    setResults(results) {
      this.weather = results
      this.weather1 = this.weather.list[7]
      this.weather2 = this.weather.list[15]
      this.weather3 = this.weather.list[23]
      this.weather4 = this.weather.list[31]
      this.temp1 = this.weather1.main.temp
      this.temp2 = this.weather2.main.temp
      this.temp3 = this.weather3.main.temp
      this.temp4 = this.weather4.main.temp
      this.city1.name = (this.weather.city.name)
      this.city1.country = (this.weather.city.country)
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monsterrat', sans-serif;
}

#ap {
  background-image: url("../assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#ap.warm {
  background-image: url("../assets/warm-bg.jpg");
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.navbar {
  opacity: 0.5;
}
/*.location-box{*/
/*  width:250px;*/
/*}*/
</style>
