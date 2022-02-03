import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LayoutComponent } from "./layout.component";
import { TreeComponent } from "../../components/schematic/tree/tree.component";
import { TableComponent } from "../../components/schematic/table/table.component";
import { DragDropComponent } from "../../components/schematic/drag-drop/drag-drop.component";
import { AddressFormComponent } from "../../components/schematic/address-form/address-form.component";
import { DashboardOneComponent } from "../../components/schematic/dashboard-one/dashboard-one.component";
import { CardsComponent } from "../../components/schematic/uikit/cards/cards.component";
import { TabsComponent } from "../../components/schematic/uikit/tabs/tabs.component";
import { UiKitComponent } from "../../components/schematic/uikit/ui-kit/ui-kit.component";
import { MaterialModule } from "../../modules/material.module";
import { UserListComponent } from "../../components/user/user-list/user-list.component";
import { EditUserComponent } from "../../components/user/edit-user/edit-user.component";
import { AddUserComponent } from "../../components/user/add-user/add-user.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "tree", component: TreeComponent },
      { path: "table", component: TableComponent },
      { path: "drag-drop", component: DragDropComponent },
      { path: "address-form", component: AddressFormComponent },
      { path: "table", component: TableComponent },
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
          { path: "table", component: TableComponent },
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
