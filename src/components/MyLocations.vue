<template>
  <div class="locations">
    <nav-bar/>
    <main>
      <div id="background" class="background">
        <section id='itroBackground' class="intro">
          <div class="inner">
            <div class="content">
              <h1>Current Weather On Saved Location</h1>
              <div class="weather-app">
                <div class="left">
                  <div class="location"><span id="loc">{{ $store.state.locations.name }}</span></div>
                  <div id="toggleCelsius" class="temperature-celsius">
                    <span id="temperatureCelsius">{{ Math.round($store.state.locations.main.temp - 272) }}C</span></div>
                </div>
                <div class="right">
                  <div class="top">
                    <img id="icon" width="150px"
                         :src="'http://openweathermap.org/img/w/'+$store.state.locations.weather[0].icon+'.png'"/>
                    <p id="description"></p>
                  </div>
                  <div class="bottom">
                    <div class="humidity">
								<span>Humidity:
									<span id="humidity">{{$store.state.locations.main.humidity}}</span>%
									<span>💧</span>
								</span>
                    </div>
                    <div class="wind">
                      <span>Wind: <span id="wind">{{$store.state.locations.wind.speed}}</span> m/h | Presure:
                        <span id="direction">{{$store.state.locations.main.preasure}}</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import {mapActions} from 'vuex'

export default {
  name: 'App',
  components: {NavBar},
  data() {
    return {}
  },
  methods: {
    ...mapActions([
       'deleteLocation'
    ]),
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear()

      return `${day} ${date} ${month} ${year}`;
    },
  }
}
</script>

<style scoped>
.locations {
  background-image: url("../assets/cold-bg.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monsterrat', sans-serif;
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.navbar {
  opacity: 0.5;
}

.background {
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
</style>
