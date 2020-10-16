import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getFirstName'})
export class GetFirstName implements PipeTransform {
  transform(fullName: string): string {
    const firstName = fullName.split(' ')[0];
    return firstName;
  }
}
