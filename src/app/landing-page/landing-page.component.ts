import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  title='bank';
  myImage: string = "assets/Images/bankImage.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
