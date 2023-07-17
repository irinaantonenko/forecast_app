<template>
  <Chart
    :size="{ width: chartWidth, height: 300}"
    :data="data"
    :margin="margin"
    class="chart"
  >
    <template #layers>
      <Grid :strokeDasharray="'2,2'" />
      <Area :dataKeys="['name', 'pl']" type="monotone" :areaStyle="{ fill: 'url(#grad)' }" />
      <Line
        :dataKeys="['name', 'pl']"
        type="monotone"
        :lineStyle="{
          stroke: 'rgb(7 194 129)'
        }"
      />
      <!-- <Marker v-if="marker" :value="1000" label="Mean." color="rgb(7 194 129)" strokeWidth="2" strokeDasharray="6 6" /> -->
      <defs>
        <linearGradient id="grad" gradientTransform="rotate(90)">
          <stop offset="0%" stop-color="green" stop-opacity="1" />
          <stop offset="100%" stop-color="rgb(7 194 129)" stop-opacity="0.5" />
        </linearGradient>
      </defs>
    </template>

    <template #widgets>
      <Tooltip
        borderColor="#48CAE4"
        :config="{
          pl: { color: '#9f7aea' },
          avg: { hide: true },
          inc: { hide: true }
        }"
      />
    </template>
  </Chart>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import { Chart, Grid, Line, Area, Tooltip } from 'vue3-charts'
import { plByMonth } from '../vuex/index.js'

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line, Area, Tooltip },
  setup() {
    const data = ref(plByMonth)
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })
    let chartWidth;

// Determine the initial chart width based on the screen resolution
    if (window.innerWidth >= 1800) {
      chartWidth = ref((window.innerWidth - 400) / 2 - 70);
    } else if (window.innerWidth < 1800 && window.innerWidth > 1450) {
      chartWidth = ref((window.innerWidth - 310) / 2 - 70);
    } else if (window.innerWidth <= 1450 && window.innerWidth > 1270) {
      chartWidth = ref((window.innerWidth - 280) / 2 - 70);
    } else if (window.innerWidth <= 1270 && window.innerWidth > 1024) {
      chartWidth = ref(window.innerWidth  / 2 - 70);
    } else if (window.innerWidth <= 1024 && window.innerWidth > 1023) {
      chartWidth = ref(910);
    } else if (window.innerWidth <= 1023 && window.innerWidth > 550) {
      chartWidth = ref(window.innerWidth - 90);
    } else if (window.innerWidth <= 550) {
      chartWidth = ref(500);
    }
    
    // Update chart width when the window is resized
    const updateChartWidth = () => {
      if (window.innerWidth >= 1800) {
        chartWidth.value = (window.innerWidth - 370) / 2 - 70;
      } else if (window.innerWidth < 1800 && window.innerWidth > 1450) {
        chartWidth.value = (window.innerWidth - 310) / 2 - 70;
      } else if (window.innerWidth <= 1450 && window.innerWidth > 1270) {
        chartWidth.value = (window.innerWidth - 280) / 2 - 70;
      } else if (window.innerWidth <= 1270 && window.innerWidth > 1024) {
        chartWidth.value = (window.innerWidth  / 2 - 70);
      } else if (window.innerWidth <= 1024 && window.innerWidth > 1023) {
        chartWidth.value = 910 ;
      } else if (window.innerWidth <= 1023 && window.innerWidth > 550) {
        chartWidth.value = (window.innerWidth - 90);
      } else if (window.innerWidth <= 550) {
        chartWidth.value = 500;
      }
    };
// Add event listener for window resize
window.addEventListener('resize', updateChartWidth);

// Remove event listener when the component is unmounted
watch(chartWidth, () => {
  window.removeEventListener('resize', updateChartWidth);
}, { immediate: true, flush: 'post' });

// ... rest of the code


    return { data, margin, chartWidth }
}
})
</script>
<style lang="scss">
.chart {
  padding: 20px;
  @media (min-width: 2560px) {
    padding: 60px 20px;  
  }
  @media (max-width: 1450px) {
    padding: 10px 20px;  
  }
}
</style>