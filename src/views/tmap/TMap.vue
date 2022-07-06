<template>
  <div class="tmap">
    <div class="marker">
      <div class="event">发生了</div>
      <div class="close" @click="close">X</div>
    </div>
  </div>
</template>

<script>
//#region
/* window.init = function init() {
  var myLatlng = new qq.maps.LatLng(23.0, 113.1);
  var myOptions = {
    zoom: 13,
    center: myLatlng,
  };
  var map = new qq.maps.Map(document.querySelector(".tmap"), myOptions);
  var marker = new qq.maps.Marker({
    //设置Marker的位置坐标
    position: myLatlng,
    //设置显示Marker的地图
    map: map,
  });
  //设置Marker的可见性，为true时可见,false时不可见，默认属性为true
  marker.setVisible(true);
  // 监听Marker的点击事件
  qq.maps.event.addListener(marker, "click", function (e) {
    let { x, y } = e.cursorPixel;
    let marker_div = document.querySelector(".marker");
    marker_div.style.left = x + 20 + "px";
    marker_div.style.top = y + "px";
    marker_div.style.display = "block";
  });
};

/* // 引入腾讯地图服务
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://map.qq.com/api/js?v=2.exp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&callback=init";
  document.body.appendChild(script);
} */
//#endregion

export default {
  name: "TMap",
  data() {
    return {
      map: "",
    };
  },
  methods: {
    init() {
      var myLatlng = new qq.maps.LatLng(23.0, 113.1);
      var myOptions = {
        zoom: 13,
        center: myLatlng,
      };
      this.map = new qq.maps.Map(document.querySelector(".tmap"), myOptions);
    },
    close() {
      let marker_div = document.querySelector(".marker");
      marker_div.style.display = "none";
    },
  },
  mounted() {
    this.init();
    setInterval(() => {
      var anchor = new qq.maps.Point(6, 6),
        size = new qq.maps.Size(24, 24),
        origin = new qq.maps.Point(0, 0),
        icon = new qq.maps.MarkerImage(
          "https://mapapi.qq.com/web/lbs/javascriptV2/demo/img/center.gif",
          size,
          origin,
          anchor
        );

      var marker = new qq.maps.Marker({
        //设置Marker的位置坐标
        position: new qq.maps.LatLng(
          23.0 - 0.12 * Math.random(),
          113.1 - 0.2 * Math.random()
        ),
        //设置显示Marker的地图
        map: this.map,
        icon: icon,
      });
      var text = [
        "发生交通事故",
        "发生枪击",
        "发生盗窃",
        "有地方失火",
        "有人打架",
      ][Math.ceil(Math.random() * 4)];
      //设置Marker的可见性，为true时可见,false时不可见，默认属性为true
      marker.setVisible(true);
      // 监听Marker的点击事件
      qq.maps.event.addListener(marker, "click", function (e) {
        let { x, y } = e.cursorPixel;
        let marker_div = document.querySelector(".marker");
        marker_div.style.left = x + 20 + "px";
        marker_div.style.top = y + "px";
        marker_div.style.display = "block";
        document.querySelector(".event").innerText = text;
      });
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.tmap {
  width: 100%;
  height: 100%;
  position: relative;
  .marker {
    position: absolute;
    width: 200px;
    border: 1px solid #ccc;
    background: rgba(255, 255, 255, 0.601);
    z-index: 999;
    display: none;
    padding: 5px;
    .close {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid red;
      text-align: center;
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
}
</style>
