<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 22:04:23
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 23:07:33
 * @FilePath     : \ambre-admin-vue2\src\components\ambre-nav\ambre-nav.vue
-->
<template>
  <div class="ambrenav">
    <div class="ambrenav-label">
      <div @click="changeNav" class="iconfont icon-list text-24"></div>
    </div>
    <div class="ambrenav-person">
      <img src="https://portrait.gitee.com/uploads/avatars/namespace/1735/5207493_vplandchina_1578756952.png!avatar100" alt="">
      <div class="text-12 pt-15">
        <div class="pb-5">
          <span class="font-weight-bold">USERNAME：</span>
          <span>VPLAND</span>
        </div>
        <div class="pb-5">
          <span class="font-weight-bold">POWER：</span>
          <span>SUPREME</span>
        </div>
        <div class="cursor-pointer font-weight-bold">
          <span>Switch account</span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex-ju-between">
        <div class="ambrenav-block">
          <div
          v-for="(item,index) in 11"
          :key="index"
          :class="`ambrenav-block-item flex-ju-al-center ${index===1&&'ambrenav-block-item-active'}`">
              <div class="text-32 iconfont icon-user-plus"></div>
          </div>
        </div>
        <div class="flex-1 ambrenav-list">
          <div
          :class="`ambrenav-list-item flex-ju-al-between ${index===1&&'ambrenav-list-item-active'}`"
          v-for="(item,index) in 21"
          :key="index">
            <div class="iconfont icon-home"></div>
            <div class="flex-1 pl-10">name</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Nav extends Vue {
  @Prop() private msg!: string;

  changeNav () {
    this.$store.commit('changeNav')
  }
}
</script>
