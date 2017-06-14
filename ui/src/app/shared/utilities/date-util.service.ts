import {Injectable} from '@angular/core';

@Injectable()
export class DateUtilService {

    constructor() {
    }

    transformUIDate(date): any {
        if (date != null) {
            date = new Date(date);
            return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
        }
        else {
            return null
        }
    }

    transformServerDate(date): any {
        if (date == null) {
            return null;
        }
        else {
            return date.month + "/" + date.day + "/" + date.year;
        }
    }
}
