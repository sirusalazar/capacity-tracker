import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from 'src/app/shared/models';
import { Country } from '../../shared/models/Country';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamMembers: Team[] = [];
  private totalMembers = 0;
  public teamList$ = new Subject<Team[]>();

  public get team() {
    return this.teamMembers;
  }

  public get totalTeamMembers() {
    return this.totalMembers;
  }

  /**
   * Method to update members in a certain country.
   * @param country
   * @param members
   */
  public updateMembers(country: Country, members: number): void {
    const countryIndex = this.teamMembers.findIndex(
      c => c.country.code === country.code
    );
    this.teamMembers[countryIndex].members = members;

    const acumMembers = this.teamMembers.reduce((acum, current) => {
      return { ...acum, members: acum.members + current.members };
    });

    this.totalMembers = acumMembers.members;
    this.teamList$.next(this.teamMembers);
  }

  /**
   * Method to include new country and members to the team
   * @param country
   * @param members
   */
  public addTeamMembers(country: Country, members: number): void {
    if (!this.teamMembers.find(t => t.country.code === country.code)) {
      this.totalMembers += members;
      this.teamMembers.push({
        country,
        members,
      });
    }
    this.teamList$.next(this.teamMembers);
  }
}
