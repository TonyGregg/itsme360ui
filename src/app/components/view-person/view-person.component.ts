import { Component, OnInit } from '@angular/core';
import {PersonalService} from '../../services/personal.service';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../person/Person';

@Component({
  selector: 'app-view-person',
  templateUrl: './view-person.component.html',
  styleUrls: ['./view-person.component.css']
})
export class ViewPersonComponent implements OnInit {
  public person: Person;

  constructor(private personService: PersonalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOnePerson(this.route.snapshot.params.id);
  }
  getOnePerson(id: number) {
    this.personService.getPerson(id).subscribe(

      (data: Person) => {
        this.person = data;
      },
      err => {
        console.log('Error occurred while fetching one person with id ' + id);
      },
     () => {
       console.log('One person service invoked for id ' + id);
     }

    );
  }

}
