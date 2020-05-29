<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-30 00:46:08
 * @FilePath     : \ambre-admin-vue2\src\App.vue
-->
<template>
  <div id="app">
    <ambre-bar></ambre-bar>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ambreBar from '@/components/ambre-bar/ambre-bar.vue'

@Component<App>({
  components: {
    ambreBar
  }
})
export default class App extends Vue {
  test = ''
}
</script>
