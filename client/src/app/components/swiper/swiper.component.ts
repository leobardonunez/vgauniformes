import { Component, OnInit } from '@angular/core';
import Swiper, {
  Navigation,
  EffectFade,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

Swiper.use([Pagination,EffectFade]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

}
