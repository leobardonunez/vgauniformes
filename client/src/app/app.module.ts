import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule , Routes } from '@angular/router';

//components
import { SvgNavbarComponent } from './components/svg-navbar/svg-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialBarComponent } from './components/social-bar/social-bar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ModelosComponent } from './components/modelos/modelos.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { MapComponent } from './components/map/map.component';
//Swiper
import { SwiperModule } from 'swiper/angular';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CamisasComponent } from './components/camisas/camisas.component';
import { PantalonesComponent } from './components/pantalones/pantalones.component';
//Error al recargar pagina
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


//Services
import { ItemsService } from '../app/services/items.service';
import { HeadImageComponent } from './components/head-image/head-image.component';
import { ImageNavbarComponent } from './components/image-navbar/image-navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';


const rutas: Routes=[
  //Ruta principal
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  //Navbar
  {
    path: 'navbar',
    component: NavbarComponent
  },
  //Modelos
  {
    path: 'modelos',
    component: ModelosComponent
  },
  //Camisas
  {
    path: 'camisas',
    component: CamisasComponent
  },
  //Pantalones
  {
    path: 'pantalones',
    component: PantalonesComponent
  },
  //Marcas
  {
    path: 'marcas',
    component: MarcasComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SvgNavbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    NavbarComponent,    
    SocialBarComponent,
    NosotrosComponent,
    GalleryComponent,
    MaterialsComponent,
    MarcasComponent,
    ModelosComponent,
    ParallaxComponent,
    MapComponent,
    SwiperComponent,
    CamisasComponent,
    PantalonesComponent,
    HeadImageComponent,
    ImageNavbarComponent,
    CarouselComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    RouterModule.forRoot(rutas , {
      //opciones extra de ruteo
      enableTracing:true,
      //para las #anclas
      anchorScrolling: 'enabled'
    })
  ],
  providers: [{provide: LocationStrategy , useClass: HashLocationStrategy}, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
