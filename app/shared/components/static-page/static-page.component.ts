import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.scss']
})
export class StaticPageComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() pageImagePath: string;
  @Input() pageContent: string;

  constructor() { }

  ngOnInit() {
  }

}
