import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'replaceString' })

export class ReplaceString implements PipeTransform {
    transform(value:string, searched:string, replace:string) {
        var v = value.split(searched);
        if (replace == "br") {
            return v.join("\r");
        }
        return v.join(replace);
    }

}