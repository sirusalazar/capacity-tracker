import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Team } from '../../../shared/models/Team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.scss'],
})
export class TeamListItemComponent implements OnInit {
  @Input() public item: Team = {
    country: { code: '', name: '', timezone: '' },
    members: 0,
  };

  public membersFormControl = new FormControl(this.item.members, [
    Validators.required,
    Validators.max(10 - this.teamService.totalTeamMembers),
    Validators.min(1),
  ]);

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.teamList$.subscribe(() => {
      this.membersFormControl.setValidators([
        Validators.max(
          10 - (this.teamService.totalTeamMembers - this.item.members)
        ),
      ]);
    });
  }

  /**
   * Method to notify team service that a change has happened.
   * @param event
   */
  onMembersChanged(event: any): void {
    const { value } = event.target;
    if (!this.membersFormControl.errors) {
      this.teamService.updateMembers(this.item.country, +value);
    }
  }
}
