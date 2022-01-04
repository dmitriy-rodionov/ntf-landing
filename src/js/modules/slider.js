import {tns} from "tiny-slider";

const slider = () => {
  const tinySlider = tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    axis: "vertical",
    controlsContainer: '.controls',
    nav: false,
    mouseDrag: true,
    autoHeight: true,
  });
}

export default slider;