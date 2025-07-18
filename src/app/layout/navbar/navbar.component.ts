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
    {name:'Company',url:''},
     {name:'Job-apply',url:'view-jobapp'},
       {name:'Question',url:'question'},
        {name:'Conversation',url:'conversation'},
  ]

}
