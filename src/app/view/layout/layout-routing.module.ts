import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { LayoutComponent } from './layout.component';
import { TreeComponent } from '../schematic/tree/tree.component';
import { TableComponent } from '../schematic/table/table.component';
import { DragDropComponent } from '../schematic/drag-drop/drag-drop.component';
import { AddressFormComponent } from '../schematic/address-form/address-form.component';
import { DashboardOneComponent } from '../schematic/dashboard-one/dashboard-one.component';
import { CardsComponent } from '../schematic/uikit/cards/cards.component';
import { TabsComponent  } from '../schematic/uikit/tabs/tabs.component';
import { UiKitComponent } from '../schematic/uikit/ui-kit/ui-kit.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'tree', component: TreeComponent },
      { path: 'table', component: TableComponent },
      { path: 'drag-drop', component: DragDropComponent },
      { path: 'address-form', component: AddressFormComponent },
      {
        path: 'ui-kit', component: UiKitComponent ,
        children: [
          { path: 'cards', component: CardsComponent },
          { path: 'tabs', component: TabsComponent }
        ]
      },

    ]
  },

];

@NgModule({
  declarations: [
    CardsComponent,
    TabsComponent
  ],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
