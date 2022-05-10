import { Component } from "@angular/core";

@Component({
    selector: 'steps-nav',
    templateUrl: './steps-nav.component.html',
    styleUrls: ['./steps-nav.component.css']
})

export class StepsNavComponent {
    stepsList = [
        ["Dados básicos", "basic"],
        ["Experiências profissionais", "professional"]
    ]
}