import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const importedModules = [
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [...importedModules],
  exports: [...importedModules],
})
export class MaterialModule {}
