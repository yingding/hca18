import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {AboutComponent} from './about';
import {ExampleComponent} from './examples';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'example', component: ExampleComponent},
    {path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);