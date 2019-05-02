import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactAddress = ' divante@divante.pl \n \n' +
    'tel. 123 - 456 - 789 \n' +
    'tel. 887 - 236 - 324 \n \n'+
    'ul. Dmowskiego 17 \n' +
    '00 - 000 Wrocław';

  constructor() { }

  ngOnInit() {
  }

}
