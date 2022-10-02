# PhoneInputExample
```typescript
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


}
```

View
```html
<div class="container">
  <div class="select">
    <select [ngModel]="phone.code" [disabled]="disabled" (ngModelChange)="setValue($event, 'code')">
      <option value="us">+1</option>
      <option value="ru">+7</option>
    </select>
  </div>
  <div class="input">
    <input
      type="text"
      placeholder="Type here..."
      [ngModel]="phone.value"
      (ngModelChange)="setValue($event, 'value')"
      [disabled]="disabled"
    />
  </div>
</div>
```

Usage
```html
form [formGroup]="phoneForm" >
<p>
  <input type="text" formControlName="name" placeholder="Name">
</p>

<app-phone-input formControlName="phone"></app-phone-input>
</form>


<h2>With ng model</h2>
<app-phone-input [(ngModel)]="phoneInput"></app-phone-input>

```

Display ngModel data
```html
<app-phone-input 
  [(ngModel)]="phoneInput" 
  name="phoneInput"
  #phoneData="ngModel"
></app-phone-input>
<p>{{phoneData.control | json}}</p>
```

[Stackblitz demo](https://stackblitz.com/edit/github-pwabun?file=src/app/app.component.html)
