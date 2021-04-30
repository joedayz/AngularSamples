import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {MailModule} from './mail/mail.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DashboardModule} from './dashboard/dashboard.module';


export const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MailModule,
    DashboardModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
