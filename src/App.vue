<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 21:36:10
 * @FilePath     : \ambre-admin-vue2\src\App.vue
-->
<template>
  <div id="app">
    <div class="flex-ju-between">
      <transition name="fade">
      <ambre-nav v-if="showNav"></ambre-nav>
      </transition>
      <div :class="`app flex-1 ${!showNav&&'app-m-0'}`">
        <ambre-bar></ambre-bar>
        <div :class="`app-view ${!showNav&&'app-view-fold'}`">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ambreBar from '@/components/ambre-bar/ambre-bar.vue'
import ambreNav from '@/components/ambre-nav/ambre-nav.vue'

@Component<App>({
  components: {
    ambreBar,
    ambreNav
  }
})
export default class App extends Vue {
  private msg = ''
  get showNav () {
    return this.$store.state.showNav
  }

  mounted () {
    console.log(this.showNav)
  }
}
</script>
