import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from '../list-hotels/list-hotels.component';
import { FiltersComponent } from '../filters-hotels/filters.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        ListComponent,
        FiltersComponent
    ],
    entryComponents: [
        ListComponent,
        FiltersComponent
    ]
})

export class DashboardModule { }