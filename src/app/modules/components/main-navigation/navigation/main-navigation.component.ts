import { Component } from "@angular/core";

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: [ './main-navigation.component.scss' ]
})
export class MainNavigationComponent {

  constructor() {
    console.log('main navigation');
  }
}