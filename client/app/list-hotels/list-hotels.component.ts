import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../providers/hotels.service';


@Component({
    selector: 'app-list-hotels',
    templateUrl: './list-hotels.component.html'
})
export class ListComponent implements OnInit {

    hotels: any = [];
    pathImage: string = 'assets/images/hotels/';
    pathIcon: string = 'assets/icons/amenities/';
    constructor(public _hotelsService: HotelsService) { }


    ngOnInit() {
        this.getData();
    }

    getData(): void {
        this._hotelsService.getHotels()
            .subscribe((response: any) => {
                this.hotels = response.data;
                console.log(this.hotels);
            });
    }

}
