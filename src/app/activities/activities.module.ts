import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { TeximateModule } from 'ngx-teximate';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'activiteiten',
    component: ActivitiesComponent
  }
];

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    TeximateModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
