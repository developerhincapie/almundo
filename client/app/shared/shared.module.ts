import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconStarComponent } from './components/icon-star/icon-star.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        IconStarComponent
    ],
    exports: [
        NavbarComponent,
        IconStarComponent
    ]
})

export class SharedModule { }
