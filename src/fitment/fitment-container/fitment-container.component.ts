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
import { getState, VehicleState } from '../store/reducers/vehicle.reducer';

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
  showData: boolean;

  // import the store into the constructor
  constructor(private store: Store<VehicleState>) {}

  ngOnInit() {
    this.store.select(getState).subscribe((res: any) => {
      this.years$ = res.vehicle.years;
      this.makes$ = res.vehicle.makes;
      this.models$ = res.vehicle.models;
      this.trims$ = res.vehicle.trims;
    });
  }

  getYears() {
    this.showData = true;
    this.store.dispatch(new LoadYears());
  }

  getMake(year) {
    this.store.dispatch(new SelectedYear(year));
    this.store.dispatch(new LoadMAKES(year));
  }

  getModel(make) {
    this.store.dispatch(new SelectedMake(make));
    this.store.dispatch(new LoadMODELS(make));
  }

  getTrims(model) {
    this.store.dispatch(new LoadTRIMS(model));
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
