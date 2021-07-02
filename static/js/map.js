//创建和初始化地图函数：
function initMap(){
      createMap();//创建地图
      // setMapEvent();//设置地图事件
      // addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map");
      map.centerAndZoom(new BMap.Point(117.797371,30.978693), 18);
      var marker1 = new BMap.Marker(new BMap.Point(117.797371,30.978693)); // 创建标注
      map.addOverlay(marker1); // 将标注添加到地图中
      //marker1.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      //创建信息窗口
      var infoWindow1 = new BMap.InfoWindow("<b>铜陵达乐电子商务有限公司</b><br>地址：安徽省铜陵市铜官区梅塘社区办公楼<br>电话：15601689370");
      marker1.openInfoWindow(infoWindow1);
      //marker1.addEventListener("click", function(){this.openInfoWindow(infoWindow1);});
      //向地图中添加缩放控件
      var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
      });
      map.addControl(ctrl_nav);
      //向地图中添加缩略图控件
      var ctrl_ove = new BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
      });
      map.addControl(ctrl_ove);
      //向地图中添加比例尺控件
      var ctrl_sca = new BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
      });
      map.addControl(ctrl_sca);

      map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
      map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
      map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
      map.enableKeyboard(); //启用键盘上下左右键移动地图
    }
    // function setMapEvent(){
    //   map.enableScrollWheelZoom();
    //   map.enableKeyboard();
    //   map.enableDragging();
    //   map.enableDoubleClickZoom()
    // }
    // function addClickHandler(target,window){
    //   target.addEventListener("click",function(){
    //     target.openInfoWindow(window);
    //   });
    // }
    // function addMapOverlay(){
    //   var markers = [
    //     {content:"",title:"",imageOffset: {width:-46,height:-21},position:{lat:39.968038,lng:116.463626}}
    //   ];
    //   for(var index = 0; index < markers.length; index++ ){
    //     var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
    //     var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
    //       imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
    //     })});
    //     var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
    //     var opts = {
    //       width: 200,
    //       title: markers[index].title,
    //       enableMessage: false
    //     };
    //     var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
    //     marker.setLabel(label);
    //     addClickHandler(marker,infoWindow);
    //     map.addOverlay(marker);
    //   };
    // }
    // //向地图添加控件
    // function addMapControl(){
    //   var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    //   scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    //   map.addControl(scaleControl);
    //   var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT,type:0});
    //   map.addControl(navControl);
    //   var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    //   map.addControl(overviewControl);
    // }
    var map;
      