import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.scss'],
})
export class ProfessorsComponent implements OnInit {
  listProfessors: Person[] = [];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getProfessors();
  }

  getProfessors(): void {
    this.personService.getProfessors().subscribe((response) => {
      this.listProfessors = [];
      for (const p of response) {
        this.listProfessors.push({
          name: p.name,
          patronus: p.patronus,
          age: this.personService.calculateAge(p.yearOfBirth),
          image: p.image,
        });
      }
    });
  }
}
