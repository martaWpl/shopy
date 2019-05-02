import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
  pageContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
    ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

  constructor() { }

  ngOnInit() {
  }

}
