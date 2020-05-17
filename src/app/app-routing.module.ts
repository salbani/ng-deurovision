import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { CareerComponent } from './routing/career/career.component';
import { ContactComponent } from './routing/contact/contact.component';
import { ImpressumComponent } from './routing/impressum/impressum.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
