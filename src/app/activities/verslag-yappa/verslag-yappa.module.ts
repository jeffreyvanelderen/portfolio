import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerslagYappaComponent } from './verslag-yappa.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'activiteiten/yappa',
    component: VerslagYappaComponent
  }
];

@NgModule({
  declarations: [VerslagYappaComponent],
  imports: [
    CommonModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ]
})
export class VerslagYappaModule { }
