import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'stock-branch',
  styleUrls: ['stock-branch.component.scss'],
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <input type="text" formControlName="branch" placeholder="Branch ID">
        <div class="error" *ngIf="required('branch')">
            Branch ID is required
        </div>
        <input type="text" formControlName="code" placeholder="Manager Code">
        <div class="error" *ngIf="required('code')">
            Manager ID is required
        </div>
      </div>
    </div>

  `
})
export class StockBranchComponent {

  @Input()
  parent: FormGroup;

  required(name: string){
    return (
      this.parent.get(`store.${name}`).hasError('required') && this.parent.get(`store.${name}`).touched
    );
  }
}
