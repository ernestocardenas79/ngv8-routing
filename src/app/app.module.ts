import { ProductsModule } from './products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Features Modules*/
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomePageComponent } from './welcome-page.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import { MessagesModule } from './messages/messages.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductsModule,
    UserModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
