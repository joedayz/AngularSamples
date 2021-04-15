import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)">
      <ng-template [ngIf]="name.length > 3">
        <div>
          Searching for... {{ name }}
        </div>
      </ng-template>

      <div *ngIf="name.length > 3">
        Searching for... {{ name }}
      </div>

    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name = value;
  }
}
