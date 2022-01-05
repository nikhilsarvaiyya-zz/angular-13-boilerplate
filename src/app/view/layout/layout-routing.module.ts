import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutComponent } from './layout.component';
import { TreeComponent } from '../schematic/tree/tree.component';
import { TableComponent } from '../schematic/table/table.component';
import { DragDropComponent } from '../schematic/drag-drop/drag-drop.component';
import { AddressFormComponent } from '../schematic/address-form/address-form.component';
import { DashboardOneComponent } from '../schematic/dashboard-one/dashboard-one.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'tree', component: TreeComponent },
      { path: 'table', component: TableComponent },
      { path: 'drag-drop', component: DragDropComponent },
      { path: 'address-form', component: AddressFormComponent },
      { path: 'dashboard-one', component: DashboardOneComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
