import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelComponent } from './hotel.component';
import { hotelRouter } from './hotel.rotuer';


@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    RouterModule.forChild(hotelRouter)
  ],
  providers: [],
})
export class HotelModule { }
