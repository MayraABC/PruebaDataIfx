import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private API_URL: string = environment.apiUrl;
  private urlCharacters = `${this.API_URL}/house`;
  private urlStudents = `${this.API_URL}/students`;
  private urlProfessors = `${this.API_URL}/staff`;

  constructor(private http: HttpClient) {}

  getCharacters(house: string): any {
    return this.http.get(`${this.urlCharacters}/${house}`);
  }

  getStudents(): any {
    return this.http.get(`${this.urlStudents}`);
  }

  getProfessors(): any {
    return this.http.get(`${this.urlProfessors}`);
  }

  calculateAge(year: number): number {
    return year.toString().length > 0 ? new Date().getFullYear() - year : 0;
  }
}
