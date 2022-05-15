import { Component } from "@angular/core";
import { Data } from "src/app/interface/data";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: 'resume-viewer',
    templateUrl: './resume-viewer.component.html',
    styleUrls: ['./resume-viewer.component.css']
})

export class ResumeViewerComponent {
    data: Data | undefined;
    constructor(private dataService: DataService) {
        dataService.updateDataObservable.subscribe(data => {
            this.update(data);
        });
    }

    update(data: Data) {
        this.data = data;
    }
}