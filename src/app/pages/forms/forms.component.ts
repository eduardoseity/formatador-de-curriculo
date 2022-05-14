import { Component, OnDestroy, OnInit } from "@angular/core";
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
        country: "",
        career: [{
            charge: "",
            corporate: "",
            start: "",
            end: ""
        }]
    }

    stepSubscription!: Subscription;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.stepSubscription = this.dataService.currentPageObservable.subscribe(page => { this.currentPage = page });
    }

    ngOnDestroy() {
        this.stepSubscription.unsubscribe();
    }

    updateData(event: any, dataKey: keyof typeof this.data, index?: number) {
        if (dataKey === "career") {
            var key: keyof typeof this.data.career[0];
            key = event.target.name;
            this.data["career"][index!][key] = event.target.value;
        }
        else {
            this.data[dataKey] = event.target.value;
        }
    }

    addNewCareer() {
        this.data.career.push({
            charge: "",
            corporate: "",
            start: "",
            end: ""
        })
    }

    removeCareer(index: number) {
        this.data.career.splice(index, 1);
    }

    getValue(event: any) {
        console.log(this.data.career)
        var key: keyof typeof this.data;
        key = event.target.name;
        event.target.value = this.data[key];
    }
}