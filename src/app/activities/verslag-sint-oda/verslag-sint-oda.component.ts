import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verslag-sint-oda',
  templateUrl: './verslag-sint-oda.component.html',
  styleUrls: ['./verslag-sint-oda.component.scss']
})
export class VerslagSintOdaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showImage(url: string) {
    window.open(url);
  }

}
