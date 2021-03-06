import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: "convertToSpaces"
})

export class ConvertToSpacePipe implements PipeTransform {
    transform(value, character) {
        return value.replace(character, ' ');
    }
}