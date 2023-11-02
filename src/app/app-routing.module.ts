import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaidMinueComponent } from './components/said-minue/said-minue.component';
import { DitalesComponentComponent } from './components/ditales-component/ditales-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { UserLogComponent } from './components/user-log/user-log.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserReactiveFormComponent } from './components/user-login/reactive-form/user-reactive-form/user-reactive-form.component';
import { ModProdectModule } from './components/mod-prodect/mod-prodect.module';
import { ApoutUsComponent } from './components/mod-prodect/apout-us/apout-us.component';
import { userLogGuard } from 'src/Guard/user-log.guard';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'prodect', component: ParentComponentComponent,title: 'Product page' },
  { path: 'Home', component: SaidMinueComponent, title: 'Home page' },
  { path: 'login', component: UserLogComponent, title: 'Login page' },
  { path: 'logout', component: UserLogComponent,title: 'Logout page' },
  {
    path: 'AboutUs', 
    loadChildren: () => import('./components/mod-prodect/mod-prodect.module').then(m => m.ModProdectModule)
  },
   {
    path: 'userLogin', 
    loadChildren: () => import('./components/mod-prodect/mod-prodect.module').then(m => m.ModProdectModule)
  },
  { path: 'loginPage', component: UserLoginComponent,title: 'Login Page' },
  { path: 'AdminPage', component: UserReactiveFormComponent,title: 'Admin Page', canActivate:[userLogGuard]},
  { path: 'ProdectDitales/:prdid', component: DitalesComponentComponent, title: 'Product Details' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
