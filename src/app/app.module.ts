import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LangaugeSwitcherComponent } from './langauge-switcher/langauge-switcher.component';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './routing/home/home.component';
import { BorderlineService } from './services/borderline.service';
import { DotPresenterComponent } from './dot-presenter/dot-presenter.component';
import { CareerComponent } from './routing/career/career.component';
import { ContactComponent } from './routing/contact/contact.component';
import { ImpressumComponent } from './routing/impressum/impressum.component';
import { PageComponent } from './page/page.component';


@NgModule({
   declarations: [
      AppComponent,
      LoadingScreenComponent,
      LangaugeSwitcherComponent,
      BannerComponent,
      MenuComponent,
      HomeComponent,
      DotPresenterComponent,
      CareerComponent,
      ContactComponent,
      ImpressumComponent,
      PageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [
       BorderlineService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
