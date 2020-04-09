import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerslagDenemarkenComponent } from './verslag-denemarken.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'activiteiten/busitdenemarken',
    component: VerslagDenemarkenComponent
  }
];

@NgModule({
  declarations: [VerslagDenemarkenComponent],
  imports: [
    CommonModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [VerslagDenemarkenComponent]
})
export class VerslagDenemarkenModule { }
