import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './store/effects/vehicle.effect';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('fitment', reducers),
    EffectsModule.forFeature([VehicleEffects])
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent]
})
export class FitmentModule {}
