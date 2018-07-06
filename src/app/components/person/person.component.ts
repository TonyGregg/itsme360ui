import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { Person } from './Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  // Array of Persons, i.e. people.
  public people: Person[];

  public person: Person;

  constructor(private personalService: PersonalService ) {

  }

  ngOnInit() {
    // simply call the fetchAll People Info on load
    this.fetchAllPeopleInfo();
  }

  /**
   * It is the subscriber method. Waits for the Observable to complete
   */
  fetchAllPeopleInfo() {
    this.personalService.getAllPeopleInfo().subscribe(
      (people: Person[]) => {this.people = people; },
      err => {console.log('Error fetching peronsal info.'); } ,
      () => { console.log('Personal service has been invoked and values returned. I am inside subscribe'); }
    );
  } // end of method fetchAllPeopleInfo


}
