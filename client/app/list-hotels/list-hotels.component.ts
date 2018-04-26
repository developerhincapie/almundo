import { Component, OnInit, Input } from '@angular/core';



@Component({
    selector: 'app-list-hotels',
    templateUrl: './list-hotels.component.html'
})
export class ListComponent {

    @Input() data: any = [];
    pathImage: string = 'assets/images/hotels/';
    pathIcon: string = 'assets/icons/amenities/';

    constructor() { }

}
