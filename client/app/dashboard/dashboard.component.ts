import { Component, OnInit, NgZone } from '@angular/core';

@Component({
    selector: 'app-dasboard',
    moduleId: module.id,
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    isMobile: boolean;
    
    constructor(public ngZone: NgZone) {
    }

    ngOnInit() {
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.isMobile = this.isNotMobileMenu(window.innerWidth);
            });
        };
    }

    isNotMobileMenu(value) {
        if (value > 991) {
            return false;
        }
        return true;
    }

}