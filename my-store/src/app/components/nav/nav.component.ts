import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  activeMenu=false;

  constructor(){}

  ngOnnInit():void{

  }

  toggleMenu(){
    this.activeMenu=!this.activeMenu;
  }
}
