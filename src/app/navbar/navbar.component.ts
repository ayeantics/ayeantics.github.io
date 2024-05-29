import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  logoUrl: string = "https://skolebi.emis.ge/assets/icons/logo.png"
  logoSize: number = 340
}
