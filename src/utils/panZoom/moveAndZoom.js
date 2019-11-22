// import instance from './instance';

const panzoom = require("panzoom");

// 初始化panzoom插件
function init(instance) {
  const mainContainer = instance.getContainer();
  const mainContainerWrap = mainContainer.parentNode;
  const pan = panzoom(mainContainer, {
    smoothScroll: false,
    bounds: true,
    // autocenter: true,
    zoomDoubleClickSpeed: 1,
    minZoom: 0.5,
    maxZoom: 2
  });
  instance.mainContainerWrap = mainContainerWrap;
  instance.pan = pan;
  // 缩放时设置jsPlumb的缩放比率
  pan.on("zoom", e => {
    const { scale } = e.getTransform();
    instance.setZoom(scale);
  });

  pan.on("panstart", function(e) {
    // console.log("Fired when pan is just started ", e);
    // Note: e === instance.
  });

  pan.on("panend", function(e) {
    //console.log("Fired when pan ended", e);
  });

  // 平移时设置鼠标样式
  mainContainerWrap.style.cursor = "grab";
  mainContainerWrap.addEventListener("mousedown", function wrapMousedown() {
    this.style.cursor = "grabbing";
    mainContainerWrap.addEventListener("mouseout", function wrapMouseout() {
      this.style.cursor = "grab";
    });
  });
  mainContainerWrap.addEventListener("mouseup", function wrapMouseup() {
    this.style.cursor = "grab";
  });

  return pan;
}
const panZoom = {
  init
};

export default panZoom;
