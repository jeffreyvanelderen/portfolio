import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinigameComponent } from './minigame.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MinigameComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule
  ],
  exports: [MinigameComponent]
})
export class MinigameModule { }
