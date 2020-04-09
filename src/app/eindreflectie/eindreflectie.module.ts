import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EindreflectieComponent } from './eindreflectie.component';
import { RouterModule } from '@angular/router';

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

    RouterModule.forChild(routes)
  ],
  exports: [EindreflectieComponent]
})
export class EindreflectieModule { }
