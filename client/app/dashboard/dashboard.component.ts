import { Component, OnInit, NgZone } from '@angular/core';
import { HotelsService } from '../providers/hotels.service';


@Component({
    selector: 'app-dasboard',
    moduleId: module.id,
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    hotels: any = [];
    isMobile: boolean;

    constructor(
        public _hotelsService: HotelsService,
        public ngZone: NgZone) { }

    ngOnInit() {
        this.getData();
        window.onresize = (e) => {
            this.ngZone.run(() => {
                // this.isMobile = this.isNotMobileMenu(window.innerWidth);
            });
        };
    }

    getData(): void {
        this._hotelsService.getHotels()
            .subscribe((response: any) => {
                this.hotels = response.data;
            });
    }


    search(value) {
        this._hotelsService.filterHotels(value)
            .subscribe((response: any) => {
                this.hotels = response.data;
            });
    }

}
