import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.contants';

@Injectable()
export class HotelsService {

    constructor(public http: HttpClient) { }

    getHotels() {
        return this.http.get(`${AppSettings.Api}/hotels`);
    }

    filterHotels(data) {
        return this.http.post(`${AppSettings.Api}/search-hotels`, data);
    }
}
