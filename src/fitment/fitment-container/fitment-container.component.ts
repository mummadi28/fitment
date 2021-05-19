import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;

  // import the store into the constructor
  constructor() {}

  ngOnInit() {}

  getYears() {
    console.log("getYears");

    // dispatch an action to get array of years

    // Year
    // https://6080be3273292b0017cdbf2a.mockapi.io/years
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
