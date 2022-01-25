import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-microfrontend-mfe-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() public basicUrl = 'http://localhost:4201/';
}
