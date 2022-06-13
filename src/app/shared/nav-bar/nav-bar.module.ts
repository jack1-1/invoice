import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule
  ],
  exports:[NavBarComponent],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NavBarModule { }
