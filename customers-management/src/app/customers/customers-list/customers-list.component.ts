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
            this.customersOrderTotal += cust.orderTotal || 0;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    cust.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(prop: string) {
        console.log(`sort clicked on ${prop}`)
        //TODO: To implement a sorter service that'll handle the services
    }
}