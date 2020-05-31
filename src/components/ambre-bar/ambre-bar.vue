<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 20:31:08
 * @FilePath     : \ambre-admin-vue2\src\components\ambre-bar\ambre-bar.vue
-->
<template>
  <div>
    <div class="ambrebar flex-ju-al-between">
      <div>
        <div @click="changeNav" v-if="!showNav" class="iconfont icon-list cursor-pointer text-24"></div>
      </div>
      <img style="height:100%;" src="img/logo.png" alt="">
      <div class="flex-ju-al-end">
        <el-switch
          v-model="value">
        </el-switch>
        <div class="iconfont icon-music pl-30 text-24 cursor-pointer"></div>
        <div class="iconfont icon-bell pl-30 text-24 cursor-pointer"></div>
        <div class="iconfont icon-maximize pl-30 text-24 cursor-pointer"></div>
        <div class="iconfont icon-settings pl-30 text-24 cursor-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Bar extends Vue {
  @Prop() private msg!: string;
  private value = true
  get showNav () {
    return this.$store.state.showNav
  }

  changeNav () {
    this.$store.commit('changeNav')
  }
}
</script>
