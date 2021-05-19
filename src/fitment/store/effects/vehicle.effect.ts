import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { FitmentService } from '../../fitment.service';
import * as VehicleAction from '../actions/vehicle.action';

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private service: FitmentService,
    private store$: Store
  ) {}

  @Effect() loadYears$ = this.actions$.pipe(
    ofType(VehicleAction.ActionTypes.LOAD_YEARS),
    mergeMap(() =>
      this.service
        .getData('https://6080be3273292b0017cdbf2a.mockapi.io/years', null)
        .pipe(
          map((data: any) => {
            console.log('res effect', data);
            return new VehicleAction.LoadYearsSuccess({
              years: data.year,
              models: null,
              makes: null,
              trims: null
            });
          }),
          catchError(error => of(new VehicleAction.LoadYearsFail(error)))
        )
    )
  );

  @Effect() loadMakes$ = this.actions$.pipe(
    ofType(VehicleAction.ActionTypes.LOAD_MAKES),
    withLatestFrom(this.store$.select(state => state)),
    mergeMap(([action, vehicle]) =>
      this.service
        .getData('https://6080be3273292b0017cdbf2a.mockapi.io/makes', {
          key: 'year',
          value: action['payload']
        })
        .pipe(
          map((data: any) => {
            console.log('vehicle', vehicle);
            console.log('action', action);
            return new VehicleAction.LoadMAKESSuccess({
              years: null,
              models: null,
              makes: data.make,
              trims: null
            });
          }),
          catchError(error => of(new VehicleAction.LoadMAKESFail(error)))
        )
    )
  );

  @Effect() loadModels$ = this.actions$.pipe(
    ofType(VehicleAction.ActionTypes.LOAD_MODELS),
    mergeMap((action: any) =>
      this.service
        .getData('https://6080be3273292b0017cdbf2a.mockapi.io/models', {
          key: 'make',
          value: action.payload
        })
        .pipe(
          map((data: any) => {
            return new VehicleAction.LoadMODELSSuccess({
              years: null,
              models: data.model,
              makes: null,
              trims: null
            });
          }),
          catchError(error => of(new VehicleAction.LoadMODELSFail(error)))
        )
    )
  );

  @Effect() loadTrims$ = this.actions$.pipe(
    ofType(VehicleAction.ActionTypes.LOAD_TRIMS),
    mergeMap((action: any) =>
      this.service
        .getData('https://6080be3273292b0017cdbf2a.mockapi.io/trim', {
          key: 'model',
          value: action.payload
        })
        .pipe(
          map((data: any) => {
            console.log('trim data', data);
            return new VehicleAction.LoadTRIMSSuccess({
              years: null,
              models: null,
              makes: null,
              trims: data.trim
            });
          }),
          catchError(error => of(new VehicleAction.LoadTRIMSFail(error)))
        )
    )
  );
}
