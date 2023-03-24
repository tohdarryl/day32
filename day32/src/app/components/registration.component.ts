import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RSVP } from '../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm!: FormGroup

  constructor(private fb: FormBuilder){ }

  // Called after the constructor
  ngOnInit(): void {
      this.regForm = this.createForm()
  }

  processForm(){
    // Gets user inputted values from the html/form
    // To use this method below: change models.ts 'RSVP' attending to type of string
    // const rsvp = this.regForm.value as RSVP
    const rsvp: RSVP = {
        name: this.regForm.get('name')?.value,
        email: this.regForm.get('email')?.value,
        age: this.regForm.get('age')?.value,
        // attending needs to be of type 'boolean' for checking
        attending: this.regForm.get('attending')?.value == ('yes')

    }
    console.info('>>> processing form', rsvp)
    this.regForm.reset()
  }

  private createForm(): FormGroup{
    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required, Validators.minLength(3)]),
      email: this.fb.control<string>('',[Validators.required, Validators.email]),
      age: this.fb.control<number>(18,[Validators.required, Validators.min(18)]),
      attending: this.fb.control<string>('', [Validators.required])
    })
  }

  isControlInvalid(ctrlName: string): boolean{
    // @ts-ignore
    const ctrl = this.regForm.get(ctrlName) as FormControl
    return ctrl.invalid && (!ctrl.pristine)
    // return this.regForm.get(ctrlName)?.invalid
  }
}
