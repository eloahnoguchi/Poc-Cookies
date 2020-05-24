import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poc-Cookies';
  dado: string;
  salvonocookie: string;
  constructor (private cookieService: CookieService) {}

  criarcookie () : void {
    console.log("criarcookie");
    this.cookieService.set('criarcookie', this.dado)
  }
  buscarcookie() : void{
    console.log("buscarcookie");
    this.salvonocookie = this.cookieService.get('criarcookie')
  }
  deletarcookie () :void {
    console.log("deletarcookie");
    this.cookieService.delete('criarcookie')
    this.salvonocookie = ''
  }
}
