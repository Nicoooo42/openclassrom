import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        const config = {
            apiKey: 'AIzaSyDNukowBQMqolWnfanJhwJZx7cCg65ObT0',
            authDomain: 'ckoipapa-220414.firebaseapp.com',
            databaseURL: 'https://ckoipapa-220414.firebaseio.com',
            projectId: 'ckoipapa-220414',
            storageBucket: 'ckoipapa-220414.appspot.com',
            messagingSenderId: '508799242944'
        };
        firebase.initializeApp(config);
    }
}
