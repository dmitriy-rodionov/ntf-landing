import {tns} from "tiny-slider";
import {addAnimate} from './animations';
import {removeAnimate} from './animations';
import {addAnimMultipleBlocks} from './animations';
import {removeAnimMultipleBlocks} from './animations';

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
    startIndex: 0,
  });

  
function toggleAnimate() {

  if(tinySlider.getInfo().displayIndex == 1) {
    addAnimate('.header__title');
    addAnimate('.main-logo');
  } else {
    removeAnimate('.header__title');
    removeAnimate('.main-logo');
  }

  if(tinySlider.getInfo().displayIndex == 2) {
    document.querySelector('.quality__text').classList.add('quality__text_active');
    addAnimMultipleBlocks('.quality__image');
  } else {
    document.querySelector('.quality__text').classList.remove('quality__text_active');
    removeAnimMultipleBlocks('.quality__image');
  }

  if(tinySlider.getInfo().displayIndex == 3) {
    document.querySelector('.great__text').classList.add('great__text_active');
    addAnimMultipleBlocks('.great__list-item');
  } else {
    document.querySelector('.great__text').classList.remove('great__text_active');
    removeAnimMultipleBlocks('.great__list-item');
  }

  if(tinySlider.getInfo().displayIndex == 5) {
    addAnimMultipleBlocks('.artist__item');
  } else {
    removeAnimMultipleBlocks('.artist__item');
  }

}
  tinySlider.events.on('transitionStart', toggleAnimate);
}
export default slider;