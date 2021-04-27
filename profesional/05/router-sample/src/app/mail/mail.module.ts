import {NgModule} from '@angular/core';
import {MailFolderComponent} from './containers/mail-folder/mail-folder.component';
import {MailAppComponent} from './components/mail-app/mail-app.component';
import {MailItemComponent} from './components/mail-item/mail-item.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


export const ROUTES: Routes = [
  {path: 'folder/:name', component: MailFolderComponent}
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
  exports: [
    MailAppComponent
  ]
})
export class MailModule {
}
