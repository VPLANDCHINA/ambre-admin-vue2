<!--
 * @Author       : yuanrunwei
 * @Date         : 2020-05-30 00:13:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-30 00:30:10
 * @FilePath     : \ambre-admin-vue2\src\components\ambre-bar.vue
-->
<template>
  <div>
    <div>ambre-bar</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Bar extends Vue {
  @Prop() private msg!: string;
}
</script>
