import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';
import 'moment-duration-format';

interface Duration extends moment.Duration {
  format: (template?: string, precision?: number, settings?: DurationSettings) => string;
}

interface DurationSettings {
  forceLength: boolean;
  precision: number;
  template: string;
  trim: boolean | 'left' | 'right';
}

@Pipe({name: 'iso8601'})
export class Iso8601Pipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return (moment.duration(value) as Duration).format('hh:mm:ss');
    }

    return value;
  }
}