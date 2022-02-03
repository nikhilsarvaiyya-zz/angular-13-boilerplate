import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs = [{},{},{},{},{},{},{},{}]
  tabIndex : Number = 0
 
  constructor() { }

  ngOnInit(): void {
  }

  setTab(tab : Number){
    this.tabIndex = tab
  }

}
