import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Data } from "src/app/interface/data";

import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: 'forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit, OnDestroy {
    currentPage = "basics";
    data: Data = {
        name: "José Maria da Silva",
        email: "jmaria@mail.com.br",
        tel: "(11) 99999-3333",
        address: "Av. Paulista",
        district: "Indpendência",
        city: "São Paulo",
        state: "SP",
        country: "Brasil",
        career: [{
            charge: "Encarregado",
            corporate: "Xpto",
            start: "01/01/2021",
            end: "01/01/2022",
            activities: "RRRR",
            show: "true"
        }]
    }; 

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
            this.data.career[index!][key] = event.target.value;
        }
        else {
            this.data[dataKey] = event.target.value;
        }
        this.dataService.updateData(this.data);
    }

    addNewCareer() {
        this.data.career.push({
            charge: "",
            corporate: "",
            start: "",
            end: "",
            activities: "",
            show: "true"
        });

        for (var i=0; i < this.data.career.length - 1; i++) {
            this.hideCareer(i);
        }
    }

    removeCareer(index: number) {
        this.data.career.splice(index, 1);
    }

    toggleCareer(index: number) {
        if (this.data.career[index].show == "true") {
            this.data.career[index].show = "false";
        }
        else {
            this.data.career[index].show = "true";
        }
    }

    hideCareer(index: number) {
        this.data.career[index].show = "false";
    }

    getValue(event: any) {
        console.log(this.data.career)
        var key: keyof typeof this.data;
        key = event.target.name;
        event.target.value = this.data[key];
    }
}