import { RouterModule } from '@angular/router';

import { NotesComponent } from './app/notes/notes.component';
import { AuthComponent } from './app/core/auth/auth.component';
import { AboutComponent } from './app/core/about/about.component';
import { AuthService } from './app/core/auth.service';


const routes = [
	{path: '', canActivate: [AuthService], component: NotesComponent},
	{path: 'about', canActivate: [AuthService], component: AboutComponent},
	{path: 'auth', component: AuthComponent},
	{path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes)