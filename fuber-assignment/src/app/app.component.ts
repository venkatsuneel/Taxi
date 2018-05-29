import { Component } from '@angular/core';
import { FuberService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class FuberComponent {
  constructor ( private fuberService: FuberService
  )

  getlocation(): void {
    this.fuberService.getCabLocation() 
    .finally(() => {
      // anything need to excute if success/ error this block can execute.
    })
    .subscribe(
      data => {
        // based on api we will get location and render to GUI
      }
    )
  };

  updatelocation(): void {
    this.fuberService.updateLocation(location) 
    .finally(() => {
      // anything need to excute if success/ error this block can execute.
    })
    .subscribe(
      data => {
        // for ever 5 seconds we will update customer location
      }
    )
  }
}
