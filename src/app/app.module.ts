import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { FraternitiesComponent } from './components/fraternities/fraternities.component';
import { PersonsComponent } from './components/persons/persons.component';
import { ProfessorsComponent } from './components/professors/professors.component';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonAddComponent,
    HomeComponent,
    CharactersComponent,
    FraternitiesComponent,
    PersonsComponent,
    ProfessorsComponent,
    StudentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
