/*
 * @Author       : yuanrunwei
 * @Date         : 2020-05-31 21:56:01
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2020-05-31 22:00:19
 * @FilePath     : \ambre-admin-vue2\src\types\echarts.d.ts
 */ 

import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $echarts: any
  }
}
