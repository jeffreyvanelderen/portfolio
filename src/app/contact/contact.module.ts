import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { TeximateModule } from 'ngx-teximate';

const routes = [
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TeximateModule,

    RouterModule.forChild(routes)
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
