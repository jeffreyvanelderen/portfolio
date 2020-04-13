import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verslag-yappa',
  templateUrl: './verslag-yappa.component.html',
  styleUrls: ['./verslag-yappa.component.scss']
})
export class VerslagYappaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showImage(url: string) {
    window.open(url);
  }

}
