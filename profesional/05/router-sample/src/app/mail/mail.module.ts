import {NgModule} from '@angular/core';
import {MailFolderComponent} from './containers/mail-folder/mail-folder.component';
import {MailAppComponent} from './components/mail-app/mail-app.component';
import {MailItemComponent} from './components/mail-item/mail-item.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MailService} from './mail.service';
import {MailFolderResolve} from './containers/mail-folder/mail-folder.resolve';


export const ROUTES: Routes = [
  {path: 'folder/:name', component: MailFolderComponent,
    resolve: {
        messages: MailFolderResolve
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent
  ],
  providers: [
    MailService,
    MailFolderResolve
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule {
}
