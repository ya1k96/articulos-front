import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'haceCuanto'
})
export class HaceCuantoPipe implements PipeTransform {

  transform(fecha: any): string {
    moment.locale('es');
    return moment(fecha).fromNow();
  }

}
