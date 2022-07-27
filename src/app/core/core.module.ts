import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadCardComponent } from './components/lead-card/lead-card.component';
import { SharedModule } from '../shared/shared.module';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { TeamListItemComponent } from './components/team-list-item/team-list-item.component';
import { CapacityCardComponent } from './components/capacity-card/capacity-card.component';
import { CapacityItemComponent } from './components/capacity-item/capacity-item.component';

const components = [
  LeadCardComponent,
  TeamCardComponent,
  TeamListItemComponent,
  CapacityCardComponent,
  CapacityItemComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule],
  exports: [...components],
})
export class CoreModule {}
