<template>
  <div class="lib">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";

let showBox1 = () => {
  let myChart = echarts.init(document.querySelector(".box1"));

  // 指定图表的配置项和数据
  let option = {
    title: {
      text: "汽车销量",
    },
    tooltip: {},
    toolbox: {
      feature: {
        saveAsImage: {},
        magicType: {
          type: ["bar", "line", "stack"],
        },
        dataZoom: {},
        dataView: {},
      },
    },
    legend: {
      data: ["一季度", "二季度", "三季度", "四季度"],
    },
    xAxis: {
      data: ["奔驰", "宝马", "奥迪", "大众", "捷豹", "本田"],
    },
    yAxis: {},
    series: [
      {
        name: "一季度",
        type: "bar",
        data: [40, 20, 36, 10, 30, 34],
      },
      {
        name: "二季度",
        type: "bar",
        data: [34, 20, 36, 25, 10, 20],
      },
      {
        name: "三季度",
        type: "bar",
        data: [5, 20, 30, 10, 10, 44],
      },
      {
        name: "四季度",
        type: "bar",
        data: [5, 58, 24, 10, 34, 20],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};
let showBox2 = () => {
  // 初始化一个echarts对象
  let myChart = echarts.init(document.querySelector(".box2"));
  const labelRight = {
    position: "right",
  };
  // 定义配置项
  let option = {
    title: {
      text: "负值条形图",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 80,
      bottom: 30,
    },
    xAxis: {
      type: "value",
      position: "top",
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        "ten",
        "nine",
        "eight",
        "seven",
        "six",
        "five",
        "four",
        "three",
        "two",
        "one",
      ],
    },
    series: [
      {
        name: "Cost",
        type: "bar",
        stack: "Total",
        label: {
          show: true,
          formatter: "{b}",
        },
        data: [
          { value: -0.07, label: labelRight },
          { value: -0.09, label: labelRight },
          0.2,
          0.44,
          { value: -0.23, label: labelRight },
          0.08,
          { value: -0.17, label: labelRight },
          0.47,
          { value: -0.36, label: labelRight },
          0.18,
        ],
      },
    ],
  };
  // 给echarts对象设置配置项
  myChart.setOption(option);
};
let showBox3 = () => {
  // 初始化echarts对象
  let myChart = echarts.init(document.querySelector(".box3"));
  // 配置项
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
      data: [
        "Direct",
        "Marketing",
        "Search Engine",
        "Email",
        "Union Ads",
        "Video Ads",
        "Baidu",
        "Google",
        "Bing",
        "Others",
      ],
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        selectedMode: "single",
        radius: [0, "30%"],
        label: {
          position: "inner",
          fontSize: 14,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1548, name: "Search Engine" },
          { value: 775, name: "Direct" },
          { value: 679, name: "Marketing", selected: true },
        ],
      },
      {
        name: "Access From",
        type: "pie",
        radius: ["45%", "60%"],
        labelLine: {
          length: 30,
        },
        label: {
          formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
          backgroundColor: "#F6F8FC",
          borderColor: "#8C8D8E",
          borderWidth: 1,
          borderRadius: 4,
          rich: {
            a: {
              color: "#6E7079",
              lineHeight: 22,
              align: "center",
            },
            hr: {
              borderColor: "#8C8D8E",
              width: "100%",
              borderWidth: 1,
              height: 0,
            },
            b: {
              color: "#4C5058",
              fontSize: 14,
              fontWeight: "bold",
              lineHeight: 33,
            },
            per: {
              color: "#fff",
              backgroundColor: "#4C5058",
              padding: [3, 4],
              borderRadius: 4,
            },
          },
        },
        data: [
          { value: 1048, name: "Baidu" },
          { value: 335, name: "Direct" },
          { value: 310, name: "Email" },
          { value: 251, name: "Google" },
          { value: 234, name: "Union Ads" },
          { value: 147, name: "Bing" },
          { value: 135, name: "Video Ads" },
          { value: 102, name: "Others" },
        ],
      },
    ],
  };
  // 给echarts对象设置配置项
  myChart.setOption(option);
};
let showBox4 = () => {
  // 初始化echarts对象
  let myChart = echarts.init(document.querySelector(".box4"));
  // 配置项
  let option = {
    title: {
      text: "Proportion of Browsers",
      subtext: "Fake Data",
      top: 10,
      left: 10,
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      type: "scroll",
      bottom: 10,
      data: (function () {
        var list = [];
        for (var i = 1; i <= 28; i++) {
          list.push(i + 2000 + "");
        }
        return list;
      })(),
    },
    visualMap: {
      top: "middle",
      right: 10,
      color: ["red", "yellow"],
      calculable: true,
    },
    radar: {
      indicator: [
        { text: "IE8-", max: 400 },
        { text: "IE9+", max: 400 },
        { text: "Safari", max: 400 },
        { text: "Firefox", max: 400 },
        { text: "Chrome", max: 400 },
      ],
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          type: "radar",
          symbol: "none",
          lineStyle: {
            width: 1,
          },
          emphasis: {
            areaStyle: {
              color: "rgba(0,250,0,0.3)",
            },
          },
          data: [
            {
              value: [
                (40 - i) * 10,
                (38 - i) * 4 + 60,
                i * 5 + 10,
                i * 9,
                (i * i) / 2,
              ],
              name: i + 2000 + "",
            },
          ],
        });
      }
      return series;
    })(),
  };
  // 给echarts对象设置配置项
  myChart.setOption(option);
};
onMounted(() => {
  showBox1();
  showBox2();
  showBox3();
  showBox4();
});

// 基于准备好的dom，初始化echarts实例
</script>

<style lang="scss" scoped>
.lib {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  & > div {
    width: 50%;
    height: 450px;
  }
}
</style>