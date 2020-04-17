import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-minigame',
  templateUrl: './minigame.component.html',
  styleUrls: ['./minigame.component.scss']
})
export class MinigameComponent implements OnInit {

  @Output() completedMinigame: EventEmitter<boolean> = new EventEmitter();
  displaySuccess = false;

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.completedMinigame.emit(true);
  }

  drop(source, destination) {
    const sourceLocation = source.getBoundingClientRect();
    const destinationLocation = destination.getBoundingClientRect();

    if (!(
      sourceLocation.right < destinationLocation.left ||
      sourceLocation.left > destinationLocation.right ||
      sourceLocation.bottom < destinationLocation.top ||
      sourceLocation.top > destinationLocation.bottom)) {
      this.showSuccess();
      setTimeout(() => this.hide(), 1500);
    }
  }

  showSuccess() {
    this.displaySuccess = true;
  }

}
