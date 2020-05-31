<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 22:41:51
 * @FilePath     : \ambre-admin-vue2\src\pages\Index.vue
-->
<template>
  <div class="index">
    <div class="flex-ju-between">
      <div class="index-echarts-l">
        <div id="sales1"></div>
        <div id="sales2"></div>
        <div id="sales3"></div>
      </div>
      <div class="index-echarts-m">
        <div id="map"></div>
      </div>
      <div class="index-echarts-r">
        <div id="sales4"></div>
        <div id="sales5"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '../../node_modules/echarts/map/js/china.js'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Index extends Vue {
  mounted (): void {
    this.initMap()
    this.initSales(1)
    this.initSales(2)
    this.initSales(3)
    this.initSales(4)
    this.initSales(5)
  }

  initMap () {
    const echarts = this.$echarts.init(document.getElementById('map'))
    echarts.setOption({
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: '{b}-销售数量：{c}'
      },
      geo: {
        map: 'china',
        roam: true,
        zoom: 1.2,
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#f0f3f7',
            borderColor: '#f0f3f7'
          },
          emphasis: {
            areaColor: '#24292e'
          }
        }
      },
      series: [
        {
          type: 'scatter',
          coordinateSystem: 'geo'
        },
        {
          name: '启动次数',
          type: 'map',
          geoIndex: 0,
          data: [
            { name: '广东', value: 1324 },
            { name: '山东', value: 1324 }
          ]
        }
      ],
      dataRange: {
        show: false,
        splitList: [
          { start: 1, end: 1999, label: '1-1999', color: '#cfc5de' }
        ]
      }
    })
  }

  initSales (id: number) {
    const echarts = this.$echarts.init(document.getElementById(`sales${id}`))
    echarts.setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    })
  }
}
</script>
