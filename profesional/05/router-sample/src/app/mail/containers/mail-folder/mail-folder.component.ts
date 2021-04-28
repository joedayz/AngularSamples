import {Component, OnInit} from '@angular/core';

import { Mail } from '../../models/mail.interface';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>Inbox</h2>

    {{ data | json }}
<!--    <mail-item
      *ngFor="let message of messages"
      [message]="message">
    </mail-item>-->
  `
})
export class MailFolderComponent implements OnInit{

  data: any;

 constructor(private route: ActivatedRoute) {
 }

  ngOnInit(): void {
   this.route.data.subscribe( data => {
    this.data = data;
   });
  }


}
