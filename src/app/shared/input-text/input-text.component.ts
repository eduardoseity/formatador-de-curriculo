import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.css']
})

export class InputTextComponent {
    @Input() value: string = "";
    @Input() label: string | undefined;
    @Input() name: string | undefined;
    @Input() type: string | undefined;
    @Input() placeholder: string = "";

    @Output() keyUpEvent: EventEmitter<string> = new EventEmitter();

    onKeyUp(event: any) {
        this.keyUpEvent.emit(event);
    }
}