import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { StudentsComponent } from './components/students/students.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { ProfessorsComponent } from './components/professors/professors.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'personajes', component: CharactersComponent },
  { path: 'estudiantes', component: StudentsComponent },
  { path: 'estudiante', component: PersonAddComponent },
  { path: 'profesores', component: ProfessorsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
