import { NgModule } from '@angular/core';
import { PassengerDashboardComponent } from './containers/components/passenger-dashboard.component';
import { PassengerCountComponent } from './containers/components/passenger-count/passenger-count.component';
import { PassengerDashboardService } from './containers/services/passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerDetailComponent } from './containers/components/passenger-detail/passenger-detail.component';
import { CommonModule } from '@angular/common';
import { PassengerViewerComponent } from './containers/components/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './containers/components/passenger-form/passenger-form.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';



const routes: Routes = [
  {
    path: 'passengers',
    children: [
      { path: '', component: PassengerDashboardComponent },
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
];


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [PassengerDashboardComponent, PassengerViewerComponent],
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    providers: [
        PassengerDashboardService
    ],
})
export class PassengerDashboardModule { }
