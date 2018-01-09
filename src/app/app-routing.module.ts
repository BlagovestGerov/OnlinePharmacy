import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './authentication/logout-component/logout.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UsersComponent } from './components/users/users.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';


// Guards
import { AuthGuard } from './guards/auth.guard.service';


const routes : Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [ AuthGuard ], component: HomeComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'category', pathMatch: 'full', component: CategoryComponent }, 
  { path: 'category/:id', component: CategoryDetailsComponent },  
  { path: 'login', component: LoginFormComponent },
  { path: 'logout', component: LogoutComponent },
  {path: 'contacts', component: ContactsComponent},
  {path: 'profile', canActivate: [ AuthGuard ], component: UsersComponent}  
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutesModule {  }
