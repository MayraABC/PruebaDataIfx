import { Component, OnInit } from '@angular/core';
import { Person } from '../../interfaces/person';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss'],
})
export class PersonAddComponent implements OnInit {
  imgDefault =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTZN-dqQQ5H59iTe0qV353NhGZu0cRLeD-SQ&usqp=CAU';
  formApplication: FormGroup;
  person: Person;
  listAdmission: Person[] = [];
  constructor(private formReact: FormBuilder) {}

  ngOnInit(): void {
    this.formApplication = this.formReact.group({
      name: new FormControl(''),
      patronus: new FormControl(''),
      image: new FormControl(''),
      age: new FormControl(0),
    });

    if (localStorage.getItem('listAdmission')) {
      this.listAdmission = JSON.parse(localStorage.getItem('listAdmission'));
    }
  }

  addApplication(): void {
    this.person = {
      age: parseInt(this.formApplication.get('age').value, 10),
      name: this.formApplication.get('name').value,
      patronus: this.formApplication.get('patronus').value,
      image: this.validateImage(this.formApplication.get('image').value)
        ? this.formApplication.get('image').value
        : this.imgDefault,
    };

    this.listAdmission.push(this.person);
    localStorage.setItem('listAdmission', JSON.stringify(this.listAdmission));
  }

  deleteApplications(): void {
    localStorage.removeItem('listAdmission');
    this.listAdmission = [];
  }

  validateImage(img: string): boolean {
    let found = false;
    const size = img.length;

    if (size >= 7) {
      const x = img.indexOf('https://');
      if (x !== -1) {
        found = true;
      } else if (img.indexOf('https://') !== -1) {
        found = true;
      }
    }

    return found;
  }
}
