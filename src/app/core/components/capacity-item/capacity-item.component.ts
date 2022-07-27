import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity-item',
  templateUrl: './capacity-item.component.html',
  styleUrls: ['./capacity-item.component.scss'],
})
export class CapacityItemComponent {
  @Input() title!: string;
  @Input() members!: number;
  @Input() timezone!: string;
}
