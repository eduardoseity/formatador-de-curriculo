import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })

export class DataService {
    private currentPage = new BehaviorSubject('basics');
    currentPageObservable = this.currentPage.asObservable();

    changePage(page: string) {
        this.currentPage.next(page);
    }
}