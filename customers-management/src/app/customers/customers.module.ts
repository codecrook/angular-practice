import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule, RouterModule],
    declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
    exports: [CustomersComponent]
})
export class CustomersModule { }
