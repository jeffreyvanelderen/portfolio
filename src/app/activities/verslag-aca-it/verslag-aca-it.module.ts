import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerslagAcaItComponent } from './verslag-aca-it.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'activiteiten/aca-it',
    component: VerslagAcaItComponent
  }
];

@NgModule({
  declarations: [VerslagAcaItComponent],
  imports: [
    CommonModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [VerslagAcaItComponent]
})
export class VerslagAcaItModule { }
