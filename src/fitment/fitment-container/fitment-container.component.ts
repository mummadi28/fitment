import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  LoadMAKES,
  LoadMODELS,
  LoadTRIMS,
  LoadYears,
SelectedMake,
SelectedYear
} from '../store/actions/vehicle.action';
import {
  getVehicleState,
  VehicleState
} from '../store/reducers/vehicle.reducer';

@Component({
  selector: 'app-fitment-container',
  templateUrl: './fitment-container.component.html',
  styleUrls: ['./fitment-container.component.css']
})
export class FitmentContainerComponent implements OnInit {
  years$: string[];
  makes$: string[];
  models$: string[];
  trims$: string[];

  // import the store into the constructor
  constructor(private store: Store<VehicleState>) {}

  ngOnInit() {
    this.store.select(getVehicleState).subscribe((data: any) => {
      console.log('on int', data);
      if (data.vehicle) {
        this.years$ = data.vehicle.years;
        this.makes$ = data.vehicle.makes;
        this.models$ = data.vehicle.models;
        this.trims$ = data.vehicle.trims;
      }
    });
  }

  getYears() {
    console.log('getYears');
    this.store.dispatch(new LoadYears());

    // dispatch an action to get array of years

    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  getMake(year) {
    console.log('year', year);
    this.store.dispatch(new SelectedYear(year));
    this.store.dispatch(new LoadMAKES(year));
  }

  getModel(make) {
    console.log('make', make);
    this.store.dispatch(new SelectedMake(make))
    this.store.dispatch(new LoadMODELS(make));
  }

  getTrims(model) {
    console.log('model', model);
    this.store.dispatch(new LoadTRIMS(model));
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
