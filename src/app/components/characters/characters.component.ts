import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  listCharacters: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  getCharacters(houseName: string): void {
    this.personService.getCharacters(houseName).subscribe((response) => {
      this.listCharacters = [];
      for (const p of response) {
        this.listCharacters.push({
          name: p.name,
          patronus: p.patronus,
          age: this.personService.calculateAge(p.yearOfBirth),
          image: p.image,
        });
      }
    });
  }
}
