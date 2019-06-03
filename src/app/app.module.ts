import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Features Modules*/
import { MessageModule } from './../../../APM-Start/src/app/messages/message.module';
import { UserModule } from './../../../APM-Start/src/app/user/user.module';
import { ProductModule } from './../../../APM-Final/src/app/products/product.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomePageComponent } from './welcome-page.component';
import { HomeComponent } from './home/home.component';

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
    ProductModule,
    UserModule,
    MessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
