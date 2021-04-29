import { Component, Input } from '@angular/core';

import { Mail } from '../../models/mail.interface';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {pluck} from 'rxjs/operators';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <p> {{ (message | async).full }}</p>
    </div>
  `
})
export class MailViewComponent {

  message: Observable<Mail> = this.route.data
    .pipe(
      pluck('message')
    );

  constructor(private route: ActivatedRoute) {
  }

}
