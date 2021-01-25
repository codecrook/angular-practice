import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter"/>
    `
})

export class FilterTextboxComponent implements OnInit {
    private _filter: string = '';

    get filter() {
        return this._filter;
    }
    @Input() set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter);
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    constructor() { }

    ngOnInit() {

    }
}