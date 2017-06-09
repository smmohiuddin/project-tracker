import { Component, OnInit } from '@angular/core';
import { User } from './signup.user';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})

export class SignupComponent implements OnInit {
	
	user = new User();

    constructor() { }

    ngOnInit() { }

    onRegister() {
        console.log("Name: "+ this.user.name);
        console.log("Email: "+ this.user.email);
        console.log("Password: "+ this.user.password);
        console.log("Repeat Password: "+ this.user.repeatPassword);
    }
}
