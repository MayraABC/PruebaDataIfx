import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fraternities',
  templateUrl: './fraternities.component.html',
  styleUrls: ['./fraternities.component.scss'],
})
export class FraternitiesComponent implements OnInit {
  housesArray: any = [
    { id: 'gryffindor', value: 'Gryffindor' },
    { id: 'slytherin', value: 'Slytherin' },
    { id: 'ravenclaw', value: 'Ravenclaw' },
    { id: 'hufflepuff', value: 'Hufflepuff' },
  ];

  @Output() changeHouse: EventEmitter<any>;

  defaultOption = 'gryffindor';

  constructor() {
    this.changeHouse = new EventEmitter();
  }

  ngOnInit(): void {
    this.changeHouse.emit(this.defaultOption);
  }

  onChangeHouse(event): void {
    this.changeHouse.emit(event.currentTarget.value);
  }
}
