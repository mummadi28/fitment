import { createFeatureSelector, createSelector } from '@ngrx/store';
// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from '../actions/vehicle.action';

export interface VehicleState {
  years: string[];
  makes: string[];
  models: string[];
  trims: string[];
  selectedYear: string;
  selectedMake: string;
  selectedModel: string;
}

export const initialState: VehicleState = {
  years: [],
  makes: [],
  models: [],
  trims: [],
  selectedYear: '',
  selectedMake: '',
  selectedModel: ''
};

export const getStoreState=createFeatureSelector<VehicleState>('fitment');

export const getState = createSelector(getStoreState,state=>state);

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  switch (action.type) {
    case fromVehicle.ActionTypes.LOAD_YEARS: {
      return {
        ...state
      };
    }
    case fromVehicle.ActionTypes.LOAD_YEARS_FAIL: {
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_YEARS_SUCCESS: {
      
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_MAKES: {
      return {
        ...state
      };
    }
    case fromVehicle.ActionTypes.LOAD_MAKES_FAIL: {
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_MAKES_SUCCESS: {
      console.log("***", action.payload, state)
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_MODELS: {
      return {
        ...state
      };
    }
    case fromVehicle.ActionTypes.LOAD_MODELS_FAIL: {
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_MODELS_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_TRIMS: {
      return {
        ...state
      };
    }
    case fromVehicle.ActionTypes.LOAD_TRIMS_FAIL: {
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.LOAD_TRIMS_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case fromVehicle.ActionTypes.SELECTED_YEAR: {
      return {
        ...state,
        selectedYear: action.payload
      };
    }
    case fromVehicle.ActionTypes.SELECTED_MAKE: {
      return {
        ...state,
        selectedMake: action.payload
      };
    }
     case fromVehicle.ActionTypes.SELECTED_MODEL: {
      return {
        ...state,
        selectedModel: action.payload
      };
    }
  }

  return state;
}


