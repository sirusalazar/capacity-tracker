import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';

const modulues = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
];

const components = [CountrySelectorComponent];

@NgModule({
  declarations: [...components],
  imports: [...modulues],
  exports: [...modulues, ...components],
})
export class SharedModule {}
