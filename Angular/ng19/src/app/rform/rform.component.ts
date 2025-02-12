import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  standalone: false,
  templateUrl: './rform.component.html',
  styleUrl: './rform.component.css'
})
export class RformComponent {
  emprform: FormGroup;
  // constructor() {
  //   this.emprform = new FormGroup({
  //     eid: new FormControl('', this.eidValidator),
  //     ename: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]{2,10}')]))
  //   })
  // }
  constructor(fb:FormBuilder) {
    this.emprform = fb.group({eid:['', this.eidValidator],
      ename:['', [Validators.required, Validators.pattern('[a-zA-Z]{2,10}')]]})
  }

  setvalue() {
    this.emprform.setValue({eid: 102, ename:'Amit'}); // Must supply all values
  }

  patchValue() {
    this.emprform.patchValue({eid: 105, ename:'Kumar'}); // Can supply single value as well
  }
  submit(data:any) {
    console.log(data);
  }

  eidValidator(c:any) {
    if(!c.value) {
      return null;
    }
    let min = 100,max = 125;
    let eid = c.value;
    if(eid >=min && eid <= max) {
      return null;
    }
    return {'veid': {'min': min, 'max': max}}
  }
}
