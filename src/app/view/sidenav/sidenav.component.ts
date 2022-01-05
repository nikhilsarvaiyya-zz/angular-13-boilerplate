import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  routes = [
   {name:"Dashboard", path:"dashboard-one", icon:"dashboard"},
   {name:"Tree", path:"tree", icon:"park"},
   {name:"Table", path:"table", icon:"table_chart"},
   {name:"Form", path:"address-form", icon:"feed"},
   {name:"Drad Drop", path:"drag-drop", icon:"drag_indicator"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
