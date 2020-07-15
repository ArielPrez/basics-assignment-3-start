import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    showText = false;
    btnClics = [];
    styleColor = '';
    showDetails() {
        this.showText = !this.showText;
        // this.btnClics.push(this.btnClics.length + 1);
        this.btnClics.push(new Date());
    }
}
