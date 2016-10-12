import { Component } from '@angular/core';

import  { AuthService } from '../auth.service';
import  { Store } from '../../shared/store';

@Component({
	selector: 'logout',
  	styles: [require('./app-bar.component.css')],
	template: require('./app-bar.component.htm')
})
export class AppBarComponent {
	user = {
		username:''
	}


	constructor(private authService: AuthService, private store: Store){
		this.store.changes.pluck('user')
        	.subscribe((user: any) => this.user = user);
	}

	logout() {
		this.authService.singout();
	}
}