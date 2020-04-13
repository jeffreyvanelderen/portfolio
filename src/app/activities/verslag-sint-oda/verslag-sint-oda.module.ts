import { NgModule } from '@angular/core';
import { VerslagSintOdaComponent } from './verslag-sint-oda.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: 'activiteiten/sint-oda',
    component: VerslagSintOdaComponent
  }
];

@NgModule({
  declarations: [VerslagSintOdaComponent],
  imports: [
    CommonModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [VerslagSintOdaComponent]
})
export class VerslagSintOdaModule { }
