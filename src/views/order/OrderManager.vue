<template>
  <div class="order">
    <div class="box"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import axios from "axios";
export default {
  name: "OrderManager",
  methods: {
    async showBox() {
      let myChart = echarts.init(document.querySelector(".box"));
      myChart.showLoading();
      let { data } = await axios.get("js/china.json");
      myChart.hideLoading();
      echarts.registerMap("china", data);
      let option = {
        series: [
          {
            name: "中国人口",
            type: "map",
            map: "china",
            label: {
              show: true,
            },
            data: [
              { name: "新疆", value: 8000 },
              { name: "广东", value: 30000 },
              { name: "江苏", value: 20000 },
              { name: "安徽", value: 10000 },
              { name: "台湾", value: 2000 },
              { name: "香港", value: 50000 },
            ],
          },
        ],
        visualMap: {
          min: 800,
          max: 50000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (人)",
        },
      };
      myChart.setOption(option);
    },
  },
  mounted() {
    this.showBox();
  },
};
</script>

<style lang="scss" scoped>
.order {
  .box {
    width: 80%;
    height: 800px;
    border: 1px solid red;
  }
}
</style>