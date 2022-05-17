import { Component } from "@angular/core";
import { Data } from "src/app/interface/data";
import { DataService } from "src/app/shared/services/data.service";

@Component({
    selector: 'resume-viewer',
    templateUrl: './resume-viewer.component.html',
    styleUrls: ['./resume-viewer.component.css']
})

export class ResumeViewerComponent {
    text = "<br>ggg<br>"
    data: Data | undefined;
    constructor(private dataService: DataService) {
        this.dataService.updateDataObservable.subscribe(data => {
            this.update(data);
        });
    }

    update(data: Data) {
        this.data = data;
        console.log(this.data?.career[0].activities.indexOf('\n'));
    }
}