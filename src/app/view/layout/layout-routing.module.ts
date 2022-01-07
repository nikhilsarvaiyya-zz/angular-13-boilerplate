import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LayoutComponent } from "./layout.component";
import { TreeComponent } from "../schematic/tree/tree.component";
import { TableComponent } from "../schematic/table/table.component";
import { DragDropComponent } from "../schematic/drag-drop/drag-drop.component";
import { AddressFormComponent } from "../schematic/address-form/address-form.component";
import { DashboardOneComponent } from "../schematic/dashboard-one/dashboard-one.component";
import { CardsComponent } from "../schematic/uikit/cards/cards.component";
import { TabsComponent } from "../schematic/uikit/tabs/tabs.component";
import { UiKitComponent } from "../schematic/uikit/ui-kit/ui-kit.component";
import { MaterialModule } from "../../core/modules/material.module";
import { UserListComponent } from "../../view/user/user-list/user-list.component";
import { EditUserComponent } from "../../view/user/edit-user/edit-user.component";
import { AddUserComponent } from "../../view/user/add-user/add-user.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "tree", component: TreeComponent },
      { path: "table", component: TableComponent },
      { path: "drag-drop", component: DragDropComponent },
      { path: "address-form", component: AddressFormComponent },
      {
        path: "ui-kit",
        component: UiKitComponent,
        children: [
          { path: "cards", component: CardsComponent },
          { path: "tabs", component: TabsComponent },
        ],
      },
      {
        path: "users",
        component: UiKitComponent,
        children: [
          { path: "user-list", component: UserListComponent },
          { path: "add-user", component: AddUserComponent },
          { path: "edit-user", component: EditUserComponent },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    CardsComponent,
    TabsComponent,
    EditUserComponent,
    AddUserComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
