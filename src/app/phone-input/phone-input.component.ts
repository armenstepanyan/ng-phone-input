import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

interface PhoneValue {
  code: 'us' | 'ru',
  value: string
}

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneInputComponent,
      multi: true
    }
  ]
})
export class PhoneInputComponent implements OnInit, ControlValueAccessor {

  phone: PhoneValue = {
    code: 'us',
    value: ''
  }

  defaultValue: PhoneValue = {
    code: 'us',
    value: ''
  }

  disabled = false;
  onChange!:  (val: PhoneValue) => void;
  onTouched!: () => void;

  constructor() { }

  writeValue(obj: PhoneValue | null): void {
    this.phone = obj || this.defaultValue

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue(val: any, key: 'code' | 'value'){
    if(this.disabled){
      return;
    }
    this.phone[key] = val;
    this.onChange(this.phone);
    this.onTouched();
  }

  ngOnInit(): void {
  }

}
