import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html'
})
export class FiltersComponent implements AfterViewInit {
    private name: string;
    private priceFrom: number;
    private priceTo: number;
    private stars: Array<number>;
    public allStarsSelected: boolean;
    private skip: number;

    constructor() { }

    public filterName(name?: string) {
        this.name = name;
        this.skip = 0;
        this.search();
    }

    public filterPrices(priceFrom?: number, priceTo?: number) {
        this.priceFrom = priceFrom;
        this.priceTo = priceTo;
        this.skip = 0;
        this.search();
    }

    public selectAllStars(all: boolean) {
        if (all) {
            this.stars = [1, 2, 3, 4, 5];
        } else {
            this.stars = [];
        }
        this.skip = 0;
        this.search();
    }

    public selectStar(star: number, checked: boolean) {
        if (checked) {
            this.stars.push(star);
        } else {
            const index = this.stars.indexOf(star);
            this.stars.splice(index, 1);
        }
        this.allStarsSelected = this.stars.length === 5;
        this.skip = 0;
        this.search();
    }

    public isStarChecked(star: number) {
        return this.stars.indexOf(star) !== -1;
    }

    private search() {
        this.router.navigate([''], {
            queryParams: {
                name: this.name,
                priceFrom: this.priceFrom,
                priceTo: this.priceTo,
                stars: this.stars,
                skip: this.skip,
                top: 10
            }
        });
    }

    ngAfterViewInit() {
    }
}
