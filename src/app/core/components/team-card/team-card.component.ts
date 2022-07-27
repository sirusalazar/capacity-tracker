import { Component } from '@angular/core';
import { Country } from 'src/app/shared/models';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss'],
})
export class TeamCardComponent {
  public selectedCountry!: Country;

  constructor(public teamService: TeamService) {}

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
    this.teamService.addTeamMembers(this.selectedCountry, 0);
  }
}
