import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon-star',
    templateUrl: './icon-star.component.html'
})
export class IconStarComponent implements OnInit {

    @Input()
    stars: number;
    @Input()
    size: number;
    @Input()
    color: number;
    array: Array<any>;

    constructor() { this.stars = 0; }

    ngOnInit() {
        this.array = new Array(this.stars);
    }

}
