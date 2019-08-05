import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = false;
  @Output() featureChange = new EventEmitter<{feature: string}>();
  constructor() { }

  changeFeature(feature: string){
    console.log("Emitting changeFeature event...")
    this.featureChange.emit({feature: feature});
  }
}
