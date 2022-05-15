import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Data } from "src/app/interface/data";

@Injectable({ providedIn: 'root' })

export class DataService {
    private data!: Data;
    private currentPage = new BehaviorSubject('basics');
    currentPageObservable = this.currentPage.asObservable();
    private updateDataBehavior = new BehaviorSubject(this.data);
    updateDataObservable = this.updateDataBehavior.asObservable();

    changePage(page: string) {
        this.currentPage.next(page);
    }

    updateData(data: Data) {
        this.data = data;
        this.updateDataBehavior.next(this.data);
    }

    getData() {
        return this.data;
    }
}