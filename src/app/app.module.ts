import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalService } from './services/personal.service';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './components/home/home.component';
import { ViewPersonComponent } from './components/view-person/view-person.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    ViewPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
