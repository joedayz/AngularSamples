import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change name
      </button>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
      <input
        type="text"
        [(ngModel)]="name">
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Jose';
  handleClick() {
    this.name = 'Amadeo';
  }
  handleChange(value: string) {
    this.name = value;
  }
}
