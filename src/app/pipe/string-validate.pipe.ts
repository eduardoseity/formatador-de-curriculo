import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'stringValidate' })

export class StringValidate implements PipeTransform {
    transform(value: string) {
        if (value === undefined || value === null || value === "") {
            return false;
        }
        else {
            return true;
        }
    }
}