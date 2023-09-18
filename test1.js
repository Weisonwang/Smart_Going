
var marker, map = new AMap.Map("container", {
      resizeEnable: true,
      center: [120.471049,31.582806],//地图中心坐标
      zoom: 17.3//缩放等级
    });
//输出position
fetch('/data.json')
    .then(data => {
        //在这里处理数据
  console.log(data.position);
  addMarker(data.position)
});
    // 实例化点标记
    function addMarker(position) {
        marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: position,
        offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(map);
    }
    function updateIcon() {

      if (!marker) {
        return;
      }
      marker.setIcon('//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png')
    }

    function updateContent(position) {

      if (!marker) {
        return;
      }

      // 自定义点标记内容
      var markerContent = document.createElement("div");

      // 点标记中的图标
      var markerImg = document.createElement("img");
      markerImg.className = "markerlnglat";
      markerImg.src = "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png";
      markerContent.appendChild(markerImg);

      // 点标记中的文本
      var markerSpan = document.createElement("span");
      markerSpan.className = 'marker';
      markerSpan.innerHTML = "这里有行人！";
      markerContent.appendChild(markerSpan);

      marker.setContent(markerContent); //更新点标记内容
      marker.setPosition([120.471049,31.582806]); //更新点标记位置
    }

    // 清除 marker
    function clearMarker() {

      if (marker) {
        marker.setMap(null);
        marker = null;
      }
    }