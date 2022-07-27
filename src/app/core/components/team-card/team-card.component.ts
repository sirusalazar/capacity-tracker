import { Component, OnInit } from '@angular/core';
import { Country, Team } from 'src/app/shared/models';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  public selectedCountry!: Country;

  public teamMembers: Team[] = [];

  /**
   * Method to update selected country from selector component
   * @param country selected country
   */
  public onCountryChanged(country: Country): void {
    this.selectedCountry = country;
  }

  /**
   * Method to add new item to team members only if the country isn't already added
   */
  public addTeam(): void {
    if (
      !this.teamMembers.find(t => t.country.code === this.selectedCountry.code)
    ) {
      this.teamMembers.push({
        country: this.selectedCountry,
        members: 1,
      });
    }
  }
}
