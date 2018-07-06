import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { FormControl, FormGroup, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import {throwError} from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personForm: FormGroup;
  validMessage = '';

  constructor(private personService: PersonalService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(7)]],
      email: ['', [<any>Validators.required, <any>Validators.email]]
    });
  }
  submitRegistration() {
    // console.log('Inside personal form registration');
    if (this.personForm.valid) {
      this.validMessage = 'Your personal registration has been submitted. Thank you!';
      this.personService.savePerson(this.personForm.value).subscribe(
        data => {
          this.personForm.reset();
          return true;
        },
        error => {
          console.log('Error getting the value after person registration service call');
          throwError(new Error('Error registration. .. '));
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting';
    }
  }

}
