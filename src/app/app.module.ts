
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
import { CategoryComponent } from './components/category/category.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UsersComponent } from './components/users/users.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
// import { CategoryModel } from './core/models/view-models/category';


// Services
import { AuthGuard } from './guards/auth.guard.service';
import { CategoryService } from './core/services/category-service';
import { MessageService } from './core/services/message.service';
import { ProductService } from './core/services/product-service';
import { UserService } from './core/services/user.service';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';




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
  CategoryListComponent,
  CategoryDetailsComponent,  
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
    ProductService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
