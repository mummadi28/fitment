import { Action } from '@ngrx/store';
import { VehicleState } from '../reducers/vehicle.reducer';
// import model/interface from db.json here...

// Action constants
export enum ActionTypes {
  LOAD_YEARS = '[Fitment] Load Years',
  LOAD_YEARS_FAIL = '[Fitment] Load Years Fail',
  LOAD_YEARS_SUCCESS = '[Fitment] Load Years Success',

  LOAD_MAKES = '[Fitment] Load MAKES',
  LOAD_MAKES_FAIL = '[Fitment] Load MAKES Fail',
  LOAD_MAKES_SUCCESS = '[Fitment] Load MAKES Success',

  LOAD_MODELS = '[Fitment] Load MODELS',
  LOAD_MODELS_FAIL = '[Fitment] Load MODELS Fail',
  LOAD_MODELS_SUCCESS = '[Fitment] Load MODELS Success',

  LOAD_TRIMS = '[Fitment] Load TRIMS',
  LOAD_TRIMS_FAIL = '[Fitment] Load TRIMS Fail',
  LOAD_TRIMS_SUCCESS = '[Fitment] Load TRIMS Success',

  SELECTED_YEAR = ' [FITMENT] SELECTED YEAR',
  SELECTED_MAKE = '[FITMENT] SELECTED MAKE',
  SELECTED_MODEL = '[FITMENT] SELECTED MODEL',
  SELECTED_TRIM = '[FITMENT] SELECTED TRIM'
}

// Action creators

export class LoadYears implements Action {
  readonly type = ActionTypes.LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = ActionTypes.LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = ActionTypes.LOAD_YEARS_SUCCESS;
  constructor(public payload: VehicleState) {} // Replace 'any' with interface
}

export class LoadMAKES implements Action {
  readonly type = ActionTypes.LOAD_MAKES;
  constructor(public payload: any) {}
}
export class LoadMAKESFail implements Action {
  readonly type = ActionTypes.LOAD_MAKES_FAIL;
  constructor(public payload: any) {}
}
export class LoadMAKESSuccess implements Action {
  readonly type = ActionTypes.LOAD_MAKES_SUCCESS;
  constructor(public payload: VehicleState) {} // Replace 'any' with interface
}

export class LoadMODELS implements Action {
  readonly type = ActionTypes.LOAD_MODELS;
  constructor(public payload: any) {}
}
export class LoadMODELSFail implements Action {
  readonly type = ActionTypes.LOAD_MODELS_FAIL;
  constructor(public payload: any) {}
}
export class LoadMODELSSuccess implements Action {
  readonly type = ActionTypes.LOAD_MODELS_SUCCESS;
  constructor(public payload: VehicleState) {} // Replace 'any' with interface
}

export class LoadTRIMS implements Action {
  readonly type = ActionTypes.LOAD_TRIMS;
  constructor(public payload: any) {}
}
export class LoadTRIMSFail implements Action {
  readonly type = ActionTypes.LOAD_TRIMS_FAIL;
  constructor(public payload: any) {}
}
export class LoadTRIMSSuccess implements Action {
  readonly type = ActionTypes.LOAD_TRIMS_SUCCESS;
  constructor(public payload: VehicleState) {} // Replace 'any' with interface
}
// Action types
export type VehicleAction =
  | LoadYears
  | LoadYearsFail
  | LoadYearsSuccess
  | LoadMAKES
  | LoadMAKESFail
  | LoadMAKESSuccess
  | LoadMODELS
  | LoadMODELSFail
  | LoadMODELSSuccess
  | LoadTRIMS
  | LoadTRIMSFail
  | LoadTRIMSSuccess;
