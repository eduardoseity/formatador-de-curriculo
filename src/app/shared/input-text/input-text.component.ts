import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.css']
})

export class InputTextComponent {
    @Input() error:string | undefined;
    @Output() sendValueEvent = new EventEmitter<string>();

    sendValue(event: any) {
        this.sendValueEvent.emit(event);
    }
}