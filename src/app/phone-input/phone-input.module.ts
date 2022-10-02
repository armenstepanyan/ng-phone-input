import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneInputComponent } from './phone-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhoneInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PhoneInputComponent]
})
export class PhoneInputModule { }
