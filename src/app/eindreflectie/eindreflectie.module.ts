import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EindreflectieComponent } from './eindreflectie.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes = [
  {
    path: 'eindreflectie',
    component: EindreflectieComponent
  }
];

@NgModule({
  declarations: [EindreflectieComponent],
  imports: [
    CommonModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [EindreflectieComponent]
})
export class EindreflectieModule { }
