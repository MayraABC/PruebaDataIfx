import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  @Input() listPersons: Person[] = [];

  constructor() {}

  ngOnInit(): void {}
}
