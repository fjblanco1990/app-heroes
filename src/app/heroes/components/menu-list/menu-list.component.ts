import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Input() sidenav: any;
  @Input() option_url: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
