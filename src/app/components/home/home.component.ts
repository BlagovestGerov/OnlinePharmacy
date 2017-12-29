import { Component }  from "@angular/core";

@Component({
  templateUrl: './home.components.html'
})
export class HomeComponent { 
  public username : string;

  constructor() {
    this.username = localStorage.getItem('username');
  }
}