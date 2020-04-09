import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerslagInnovatierouteComponent } from './verslag-innovatieroute.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'activiteiten/innovatieroute-AI',
    component: VerslagInnovatierouteComponent
  }
];

@NgModule({
  declarations: [VerslagInnovatierouteComponent],
  imports: [
    CommonModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [VerslagInnovatierouteComponent]
})
export class VerslagInnovatierouteModule { }
