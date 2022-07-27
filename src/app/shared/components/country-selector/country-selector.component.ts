import { Component, EventEmitter, Output } from '@angular/core';

import { countries } from './countries.constants';
import { Country } from '../../models/Country';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
})
export class CountrySelectorComponent {
  public countries = countries;

  @Output() public countryChanged: EventEmitter<Country> = new EventEmitter();

  constructor() {}

  /**
   *Method to notify when an element is selected
   * @param event
   */
  onCountryChanged(event: string): void {
    this.countryChanged.emit(this.countries.find(c => c.code === event));
  }
}
