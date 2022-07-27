import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-capacity-card',
  templateUrl: './capacity-card.component.html',
  styleUrls: ['./capacity-card.component.scss'],
})
export class CapacityCardComponent {
  constructor(public teamService: TeamService) {}
}
