import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconStarComponent } from './components/icon-star/icon-star.component';
import { IconSearchComponent } from './components/icon-search/icon-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavbarComponent,
        IconStarComponent,
        IconSearchComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NavbarComponent,
        IconStarComponent,
        IconSearchComponent
    ]
})

export class SharedModule { }
