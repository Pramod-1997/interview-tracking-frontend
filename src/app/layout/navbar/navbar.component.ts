import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menuList = [
    {name:'job ap', url:'jobap'},
    {name:'Company',url:'company'},
      {name:'recuiter',url:'recuiter'},
       {name:'Question',url:'question'},
    //    {name:'Conversation',url:'conversation'},
  ]

}
