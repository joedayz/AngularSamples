import {Component, Input} from '@angular/core';
import {Mail} from '../../models/mail.interface';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>Inbox</h2>
    <p> {{ data | json }}</p>
<!--    <mail-item-->
<!--      *ngFor="let message of messages"-->
<!--      [message]="message">-->
<!--    </mail-item>-->
  `
})
export class MailFolderComponent {
  data: Observable<{ messages: Mail[] }> = this.route.data;

  constructor(private route: ActivatedRoute ) {
  }

}
