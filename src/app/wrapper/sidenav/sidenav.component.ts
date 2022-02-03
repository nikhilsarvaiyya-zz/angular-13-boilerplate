import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit {
  routes = [
    { name: "Dashboard", path: "dashboard", icon: "dashboard" },
    {
      name: "Users",
      path: "users",
      icon: "group",
      child: [
        { name: "Users", path: "user-list" },
        { name: "Add User", path: "add-user" },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

// { name: "Tree", path: "tree", icon: "park" },
// { name: "Table", path: "table", icon: "table_chart" },
// { name: "Form", path: "address-form", icon: "feed" },
// { name: "Drad Drop", path: "drag-drop", icon: "drag_indicator" },
// {
//   name: "UI Kit",
//   path: "ui-kit",
//   icon: "credit_card",
//   child: [
//     { name: "Cards", path: "cards", },
//     { name: "Tabs", path: "tabs",  },
//   ],
// },
// {
//   name: "Users",
//   path: "users",
//   icon: "group",
//   child: [
//     { name: "Users", path: "user-list" },
//     { name: "Add User", path: "add-user" },

//   ],
// },
