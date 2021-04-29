import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {subscribeTo} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="assets/img/logo.svg">
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="[{ outlets: { primary: 'folder/inbox', pane: null } }]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
            [routerLink]="[{ outlets: { primary: 'folder/trash', pane: null} }]"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {

  navEnd: Observable<NavigationEnd>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navEnd = this.router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
    this.navEnd.subscribe(event => console.log(event));
  }
}
