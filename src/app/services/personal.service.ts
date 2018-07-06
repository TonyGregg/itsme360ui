import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../components/person/Person';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }
  /**
   *  It is observer which fetches the data over http network and pushes it to it's subscribers
   *
   */
  getAllPeopleInfo() {
    return this.http.get('/server/api/v1/persons');
  }

  getPerson(id: number) {
    return this.http.get('/server/api/v1/persons/' + id);
  }

  savePerson(person: Person) {
    const body = JSON.stringify(person);

    return this.http.post('/server/api/v1/persons', body, httpOptions);
  }

}
