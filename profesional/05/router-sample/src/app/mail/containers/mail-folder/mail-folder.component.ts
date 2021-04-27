import {Component, Input} from '@angular/core';
import {Mail} from '../../models/mail.interface';


@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>Inbox</h2>
    <mail-item
      *ngFor="let message of messages"
      [message]="message">
    </mail-item>
  `
})
export class MailFolderComponent {
  messages: Mail[] = [{
    "id": 1,
    "folder": "inbox",
    "from": "Jane Smith",
    "summary": "Materia Gris",
    "timestamp": 1487848162905
  }];
}
