
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/auth.module';
import { AppRoutesModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
  //  CategoryModel,  
    MessagesComponent,
  ProductsComponent,
  NavbarComponent,  
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    AppRoutesModule,
    FormsModule,
    AlertModule.forRoot()    
  ],
  providers: [
    AuthGuard,
    CategoryService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
