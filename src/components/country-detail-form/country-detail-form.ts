import { Component, Input } from '@angular/core';
import { CountryModel } from '../country-model';

@Component({
  selector: 'country-detail-form',
  templateUrl: 'country-detail-form.html'
})
export class CountryDetailFormComponent {

  @Input() country: CountryModel = null;
  edit: boolean = null;
  constructor() {
    this.edit = false;
    console.log(this.country);
  }
  onClicked(toggle){
    if(this.edit==true){
    }
    this.edit = toggle;
  }
  onSubmit(formValue: any){
    console.log(formValue);
  }

}
