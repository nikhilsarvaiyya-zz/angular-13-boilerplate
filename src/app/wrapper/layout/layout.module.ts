import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { MaterialModule } from '../../modules/material.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { TreeComponent } from '../../components/schematic/tree/tree.component';
import { TableComponent } from '../../components/schematic/table/table.component';
@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    TreeComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
    
  ]
})
export class LayoutModule { }
