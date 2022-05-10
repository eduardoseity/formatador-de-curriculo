import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormsComponent {
    actualPage = "";

    checkValue(event: any) {
        console.log(event);
        
    }
}