import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';
import {PersonRegistrationComponent} from './components/view-person/ViewPersonComponent';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin/view/:id',
    component: PersonRegistrationComponent
  }
  {
    path: 'people',
    component: PersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
