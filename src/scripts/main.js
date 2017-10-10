require('../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js');

import {fixedHeaderScroll} from './common/_fixedHeaderScroll';
import {hamburger} from './common/_hamburger';
import {slideMenu} from './common/_slideMenu';
import {iconsCard} from './common/_iconsCard';
import {iconCardSlider} from './common/_iconCardSlider';
import {solutionsCardSlider} from './common/_solutionsCardSlider';
import {knowledgeCardSlider} from './common/_knowledgeCardSlider';
import {universalCardSlider} from './common/_universalCardSlider';
import {searchBoxMobile} from './common/_searchBoxMobile';
import {eventsSearchForm} from './common/_eventsSearchForm';
import {masonryPopupVideo} from './common/_masonryPopupVideo';

$(document).ready(function() {
  fixedHeaderScroll();
  hamburger();
  slideMenu();
  iconsCard();
  iconCardSlider();
  solutionsCardSlider();
  knowledgeCardSlider();
  universalCardSlider();
  searchBoxMobile();
  eventsSearchForm();
  masonryPopupVideo();
});

