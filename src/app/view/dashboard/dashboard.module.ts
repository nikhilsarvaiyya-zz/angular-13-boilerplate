import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MaterialModule } from '../../core/modules/material.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
    
  ]
})
export class DashboardModule { }
