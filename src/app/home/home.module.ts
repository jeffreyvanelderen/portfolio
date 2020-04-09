import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { TeximateModule } from 'ngx-teximate';
import { MatCardModule } from '@angular/material/card';

const routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TeximateModule,
    MatCardModule,

    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
