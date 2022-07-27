import { Component, Input } from '@angular/core';
import { Team } from '../../../shared/models/Team';

@Component({
  selector: 'app-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.scss'],
})
export class TeamListItemComponent {
  @Input() public item: Team = {
    country: { code: '', name: '', timezone: '' },
    members: 0,
  };
}
