import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    template: `

        <div>
            <passenger-form
             [detail]="passenger" (update)="onUpdatePassenger($event)">
            </passenger-form>
        </div>


    `
})

export class PassengerViewerComponent implements OnInit {

    passenger: Passenger;

    constructor(private passengerService: PassengerDashboardService) { }

    ngOnInit() {

        this.passengerService
        .getPassenger(1).subscribe(
           (data: Passenger) => this.passenger =data
        );

    }

    onUpdatePassenger(event: Passenger){
        this.passengerService.updatePassenger(event).subscribe(

            data => this.passenger = Object.assign({}, this.passenger, event)
          );
    }
}
