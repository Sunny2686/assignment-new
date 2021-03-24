import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  imports: [MatToolbarModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatSidenavModule],
  exports: [MatToolbarModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatSidenavModule]
})

export class MaterialModule {

}
