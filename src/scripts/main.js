import {hamburger} from './common/_hamburger';
import {slideMenu} from './common/_slideMenu';
import {fixedHeaderScroll} from './common/_fixedHeaderScroll';
import {iconsCard} from './common/_iconsCard';
import {iconCardSlider} from './common/_iconCardSlider';
import {solutionsCardSlider} from './common/_solutionsCardSlider';
import {knowledgeCardSlider} from './common/_knowledgeCardSlider';
import {universalCardSlider} from './common/_universalCardSlider';
import {testimonialCardSlider} from './common/_testimonialCardSlider';
import {searchBoxMobile} from './common/_searchBoxMobile';
import {eventsSearchForm} from './common/_eventsSearchForm';
import {masonryPopupVideo} from './common/_masonryPopupVideo';
import {topFunction} from './common/_scrollTopFunction';

require('../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js');

$(document).ready(function() {
  hamburger();
  slideMenu();
  fixedHeaderScroll();
  iconsCard();
  iconCardSlider();
  solutionsCardSlider();
  knowledgeCardSlider();
  universalCardSlider();
  testimonialCardSlider();
  searchBoxMobile();
  eventsSearchForm();
  masonryPopupVideo();
  topFunction();
});

