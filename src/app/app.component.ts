import { Component, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jeffrey Vanelderen';
  showContent = false;

  constructor() { }

  completedMinigame(isCompleted: boolean) {
    this.showContent = isCompleted;
  }

}
