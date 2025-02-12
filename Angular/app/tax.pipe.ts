import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'tax',
    standalone: false
})
export class TaxPipe implements PipeTransform {
    transform(value: number, r: number = 0.1): number {
        return value * r;
    }
}