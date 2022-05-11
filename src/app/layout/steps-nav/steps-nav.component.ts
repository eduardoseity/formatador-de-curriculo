import { Component } from "@angular/core";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: 'steps-nav',
    templateUrl: './steps-nav.component.html',
    styleUrls: ['./steps-nav.component.css']
})

export class StepsNavComponent {
    stepsList = [
        ["Dados básicos", "basics"],
        ["Experiências profissionais", "professional"]
    ]

    constructor(private dataService: DataService) {

    }

    changeStep(page: string) {
        this.dataService.changePage(page);
    }
}