import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {

    private searchForm: FormGroup;
    private hotels: Array<object>;
    public openFilterName: boolean;
    public openFilterStar: boolean;
    private stars: Array<any>;
    private rowsStar: Array<any>;

    constructor(private fb: FormBuilder) {
        this.hotels = [];
        this.stars = [];
        this.rowsStar = [];
        this.openFilterName = true;
        this.openFilterStar = true;
    }

    ngOnInit() {
        this.rowsStar = new Array(5);
        this.createForm();
    }

    /**
     * Save and delete stars
     * @params {number} numbers stars
     */
    selectStar(stars) {
        const size = this.stars.length;
        if (this.searchForm.get(`star${stars}`).value) {
            this.stars.push(stars);
        } else {
            this.stars = this.stars.filter(data => data !== stars);
        }
        if (size === 5) {
            this.searchForm.get('all').setValue(true);
        } else if (size === 4) {
            this.searchForm.get('all').setValue(false);
        }
    }


    openFilters(property) {
        if (property === 'openFilterName') {
            this.openFilterName = !this.openFilterName;
        } else if (property === 'openFilterStar') {
            this.openFilterStar = !this.openFilterStar;
        }
    }


    selectAndUnselectAll() {
        const value = this.searchForm.get('all').value;
        if (value) {
            this.stars = [];
        }
        for (let i = 1; i <= 5; i++) {
            this.searchForm.get(`star${i}`).setValue(value);
            this.selectStar(i);
        }
    }


    filterHotels() {
        const data: any = {};
        const size: number = this.stars.length;
        const search: string = this.searchForm.get('search').value;
        if (search) {
            data.name = search;
            if (size > 0 && size < 5) {
                data.stars = this.stars;
            }
        } else if (size > 0 && size < 5) {
            data.stars = this.stars;
        }
        const query: string = this.parseFilters(data);
    }

    /**
     * Serialize object to stringify parameters '?foo=bar'
     * @params {object} filters
     * @returns {string}
     */
    parseFilters(filters: object): string {
        if (!filters) {
            return '';
        }
        let response = '';
        Object.keys(filters).map(key => {
            response += `&${key}=${JSON.stringify(filters[key])}`;
        });
        return `?${response.substring(1)}`;
    }

    /**
     * Create search form
     */
    createForm() {
        this.searchForm = this.fb.group({
            search: [''],
            all: [''],
            star5: [''],
            star4: [''],
            star3: [''],
            star2: [''],
            star1: ['']
        });
    }


}
