
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/auth.module';
import { AppRoutesModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from "angular2-image-upload";

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { CategoryModel } from './core/models/view-models/category';


// Services
import { AuthGuard } from './guards/auth.guard.service';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService } from './core/services/category-service';
import { MessageService } from './core/services/message.service';
import { MessagesComponent } from './components/messages/messages.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './core/services/user.service';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
  //  CategoryModel,  
    MessagesComponent,
  ProductsComponent,
  NavbarComponent,
  ContactsComponent,
  UsersComponent,
  AdminComponent,
  UserListComponent,
  FooterComponent,  
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutesModule,
    FormsModule,
    AlertModule.forRoot(),
    ImageUploadModule.forRoot(),   
  ],
  providers: [
    AuthGuard,
    CategoryService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
