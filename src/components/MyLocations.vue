<template>
  <div id="ap">
    <div class="locations">
      <nav-bar/>
      <main>
        <div id="background" class="background">
          <h1 class="location">
            <span>{{locations.data.city.country}}, </span>
            <span id="loc">{{ locations.data.city.name }}</span></h1>
          <div>
            <span><h3>{{locations.data.list[0].weather[0].description}}</h3></span>
          </div>
          <div class="temp">
                       <span><img id="icon" width="150px"
                                  :src="'http://openweathermap.org/img/w/'+locations.data.list[0].weather[0].icon+'.png'"/></span>
            <span id="temperatureCelsius">{{ Math.round(locations.data.list[0].main.temp - 272) }}C°</span>
          </div>
          <span class="left">
            <span> </span>
          </span>
          <div class="wind">
                      <span>Wind: <span id="wind">{{ locations.data.list[0].wind.speed }}</span> m/h | Presure:
                        <span id="direction">{{ locations.data.list[0].main.pressure }}</span></span>
            <span> | Humidity:
									<span id="humidity">{{ locations.data.list[0].main.humidity }}</span>%
									<span>💧</span>
								</span>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {NavBar},
  data() {
    return {
      lat: 0,
      lng: 0,
      location: ''
    }
  },
  methods: {
    ...mapActions([
      'saveWeather'
    ]),

  },
  computed: {
    ...mapState({
      locations: state => state.locations
    })
  },
  created() {
    this.$getLocation({})
        .then(coordinates => {
          this.saveWeather(coordinates);
        })

  }
}
</script>

<style scoped>
.locations {
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#ap.warm {
  background-image: url("../assets/sun.jpg");
}

#ap.r {
  background-image: url("../assets/warm-bg.jpg");
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
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
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

.temp {
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

</style>
