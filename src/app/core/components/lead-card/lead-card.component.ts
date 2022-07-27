import { Component } from '@angular/core';
import { Country } from 'src/app/shared/models';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss'],
})
export class LeadCardComponent {
  public leadName = '';
  public selectedCountry!: Country;

  /**
   * Method to update selected country from selector component
   * @param country selected country
   */
  onCountryChanged(country: Country): void {
    this.selectedCountry = country;
  }
}
