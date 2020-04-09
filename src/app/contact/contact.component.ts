import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { fadeInLeft } from 'ng-animate';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  text = 'Zin in een gesprek?';
  letsTalksAnimation: TextAnimation = {
    animation: fadeInLeft,
    delay: 50,
    type: 'letter'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
