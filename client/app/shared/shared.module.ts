import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconStarComponent } from './components/icon-star/icon-star.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        IconStarComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NavbarComponent,
        IconStarComponent
    ]
})

export class SharedModule { }
