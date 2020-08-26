import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  listStudents: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.personService.getStudents().subscribe((response) => {
      this.listStudents = [];
      for (const person of response) {
        this.listStudents.push({
          name: person.name,
          patronus: person.patronus,
          age: this.personService.calculateAge(person.yearOfBirth),
          image: person.image,
        });
      }
    });
  }
}
