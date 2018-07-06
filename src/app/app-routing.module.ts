import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPersonComponent } from './components/view-person/view-person.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'people/view/:id',
    component: ViewPersonComponent
  },
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
