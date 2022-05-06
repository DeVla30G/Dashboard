<template>
  <div class="vww__widget" :style="{ color: textColor }">
    <slot name="header">
      <div class="vww__header" :style="{ borderColor: barColor }" v-if="!hideHeader">
        <span class="vww__title">
          <slot name="title">Weather</slot>
        </span>
      </div>
    </slot>

    <div class="vww__content">
      <div class="vww__loading" v-if="loading">
        <slot name="loading">
          <skycon condition="partly-cloudy-day" :color="textColor" :paused="disableAnimation" />
          <span class="vww__title">Loading...</span>
        </slot>
      </div>

      <div class="vww__error" v-else-if="error || !weather || !currently || !daily">
        <slot name="error">
          <skycon condition="rain" :color="textColor" :paused="disableAnimation" />
          <span class="vww__title">{{ error || "Something went wrong!" }}</span>
        </slot>
      </div>

      <template v-else>
        <div class="vww__currently">
          <div>
            <skycon
              :condition="currently.icon"
              size="80"
              :color="textColor"
              :paused="disableAnimation"
            />
            <div class="vww__temp">
              {{ Math.round(currently.temperature) }}&deg;
              <div v-if="isDownward">
                <svg viewBox="0 0 306 306" width="24" height="24">
                  <polygon
                    points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35"
                    :style="{ fill: textColor }"
                  />
                </svg>
              </div>
              <div v-else>
                <svg viewBox="0 0 306 306" width="24" height="24">
                  <polygon
                    points="35.7,247.35 153,130.05 270.3,247.35 306,211.65 153,58.65 0,211.65"
                    :style="{ fill: textColor }"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="vww__title">{{ currently.summary }}</div>
          <div class="vww__wind">
            Wind: {{ Math.round(currently.windSpeed) }} mph ({{ windBearing }})
          </div>
        </div>

        <div class="vww__daily">
          <div class="vww__day" :key="day.time" v-for="day in daily">
            <span>{{ day.weekName }}</span>
            <span>
              <skycon
                style="display: block"
                :condition="day.icon"
                size="26"
                :color="textColor"
                :paused="disableAnimation"
              />
            </span>
            <div class="vww__day-bar">
              <div :style="{ height: `${day.top}%` }">
                <span>{{ Math.round(day.temperatureMax) }}&deg;</span>
              </div>
              <div
                :style="{
                  borderRadius: '10px',
                  background: barColor,
                  height: `${day.height}%`,
                }"
              >
                &nbsp;
              </div>
              <div :style="{ height: `${day.bottom}%` }">
                <span>{{ Math.round(day.temperatureMin) }}&deg;</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script> 
export default {
    name: 'WeatherView'
}

</script>

<style scoped>
.vww__widget {
  width: 100%;
  min-width: 250px;
  max-width: 800px;
}

.vww__header {
  position: relative;
  padding: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.vww__title {
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}

.vww__content {
  min-height: 150px;
  height: 180px;
  display: flex;
  align-items: center;
  padding: 8px;
  overflow: hidden;
}

.vww__loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vww__loading span {
  display: block;
  margin-left: 10px;
}

.vww__error {
  width: 100%;
  text-align: center;
}
.vww__error span {
  display: block;
  padding: 10px;
}

.vww__currently {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vww__currently > div {
  display: flex;
  align-items: center;
}

.vww__currently .vww__title {
  margin-top: 10px;
}

.vww__temp {
  padding: 0 10px;
  font-size: 50px;
  font-weight: bold;
  line-height: 0.65em;
}

.vww__temp > div {
  display: block;
  text-align: center;
  padding-right: 10px;
}

.vww__wind {
  font-size: 14px;
}

.vww__daily {
  display: none;
  height: 100%;
}

@media screen and (min-width: 600px) {
  .vww__currently {
    width: 300px;
  }
  .vww__daily {
    display: block;
    height: 100%;
    width: calc(100% - 300px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
  }
}

.vww__day {
  height: 100%;
  text-align: start;
  position: relative;
  min-width: 50px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.vww__day > span {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.vww__day-bar {
  margin-top: 20px;
  width: 30px;
  height: calc(100% - 100px);
}

.vww__day-bar div {
  margin: 0 5px;
  display: flex;
}

.vww__day-bar div:first-child {
  align-items: flex-end;
}

.vww__day-bar div:last-child {
  align-items: flex-start;
}

.vww__day-bar span {
  display: block;
  font-size: 12px;
}
</style>