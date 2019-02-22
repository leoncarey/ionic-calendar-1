import {Pipe} from '@angular/core';
import language_config from '../languages/lang_config';

@Pipe({
    name: 'monthName'
})
export class monthName {
    private lang: string;

    transform(value, args) {
        this.lang = args; // Language

        let monthNames = language_config[this.lang];
        return monthNames[value - 1];
    }
}
