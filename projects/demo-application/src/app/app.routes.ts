import {Routes} from '@angular/router';
import {PageOneComponent} from './pages/page-one/page-one.component';
import {PageTwoComponent} from './pages/page-two/page-two.component';

export const APP_ROUTES: Routes = [
  {path: '', component: PageOneComponent},
  {path: 'two', component: PageTwoComponent},
  {path: '**', redirectTo: ''}
];
