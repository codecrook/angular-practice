import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../../shared/interfaces'

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    private _customers: ICustomer[] = [];
    get customers(): ICustomer[] {
        return this._customers;
    }
    @Input() set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }
    filteredCustomers: ICustomer[] = [];
    customersOrderTotal!: number;
    currencyCode: string = 'USD';

    constructor() { }

    ngOnInit() {

    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }

    sort(prop: string) {
        console.log(`sort clicked on ${prop}`)
        //TODO: To implement a sorter service that'll handle the services
    }
}