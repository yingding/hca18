import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public title: any;
    constructor() {
        const initial = { value: 'Angular 2' };
        this.title = { initial }; // Object spread in TypeScript 2.1!
    }

    ngOnInit() {
        console.log('Hello Home component');
    }
    onChanges() {
        console.log('Log title' , this.title)
    }
}
