import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public phoneForm!: FormGroup;
  phoneInput = {
    code: 'us',
    value: '962365325'
  }
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.phoneForm = this.fb.group({
      name: ['', Validators.required],
      phone: [{ code: 'us', value: '123456' }]
    });
  }

  setFormValue(){
    this.phoneForm.patchValue({
      phone: { code: 'ru', value: '962410123456' }
    })
  }

  show = true;



  toggleShow(){
    this.show = !this.show;
  }


}
