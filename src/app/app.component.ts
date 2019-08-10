import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'shopping-list';//recipes

  onFeatureChangeTriggered(event: any){
    console.log(event);
    if(this.loadedFeature != event.feature){
      console.log("loading another feature...");
      this.loadedFeature = event.feature;
    } else {
      console.log("same feature. nothing to do...");
    }
  }
}
