import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: 'forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit, OnDestroy {
    currentPage = "basics";
    data = {
        name: "",
        tel: "",
        address: "",
        district: "",
        city: "",
        state: "",
        country: ""
    }

    stepSubscription?: Subscription;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.stepSubscription = this.dataService.currentPageObservable.subscribe(page => { this.currentPage = page });
    }

    ngOnDestroy() {
        this.stepSubscription?.unsubscribe();
    }

    updateData(value: string, dataKey: keyof typeof this.data) {
        this.data[dataKey] = value;
    }
}