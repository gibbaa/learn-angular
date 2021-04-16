import { Component, Input } from'@angular/core';

@Component({
    selector: 'app-counting',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class CountingComponent {
    @Input()
    titleCount: string;
    num: number;
    
    constructor() {
        this.titleCount = "";
        this.num = 0;
    }

    numberUp() {
        this.num = this.num + 1;
    }
    numberDown() {
        this.num = this.num - 1;
    }
}