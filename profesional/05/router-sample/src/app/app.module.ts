import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {MailModule} from './mail/mail.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {MailService} from './mail/mail.service';
import {MailFolderResolve} from './mail/containers/mail-folder/mail-folder.resolve';

export const ROUTES: Routes = [
  { path: '**', redirectTo: 'folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MailService, MailFolderResolve
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
