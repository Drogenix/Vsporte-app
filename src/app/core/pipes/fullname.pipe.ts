import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "../entity/player";

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {
  transform(value: Player): string {
    return value.firstName.concat(" "+value.lastName);
  }

}
