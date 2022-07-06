<template>
  <div id="gmap"></div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "vue";

const map = shallowRef(null);
let initMap = () => {
  AMapLoader.load({
    key: "3e2cafda8fd92dbe4df1292062cda40c", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      let map = new AMap.Map("gmap", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 15, //初始化地图级别
        center: [113.1, 23.0], //初始化地图中心点位置
      });
      // 创建一个 Marker 实例：
      var marker = new AMap.Marker({
        position: new AMap.LngLat(113.1, 23.0), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: "北京",
      });

      // 将创建的点标记添加到已有的地图实例：
      map.add(marker);
      marker.on("click", showInfoM);
    })
    .catch((e) => {
      console.log(e);
    });
};
function showInfoM(e) {
  var text =
    "您在 [ " +
    e.lnglat.getLng() +
    "," +
    e.lnglat.getLat() +
    " ] 的位置点击了marker！";
  alert(text);
}
initMap();
</script>

<style lang="scss" scoped>
#gmap {
  width: 100%;
  height: 100%;
}
</style>
