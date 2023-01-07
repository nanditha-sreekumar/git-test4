import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule } from '@angular/material/toolbar';    
import { MatListModule } from '@angular/material/list';   
import { MatGridListModule } from '@angular/material/grid-list';   
import { MatCardModule } from '@angular/material/card';              
import { MatButtonModule } from '@angular/material/button';        
import { MatDialogModule } from '@angular/material/dialog';             //typein
import { FlexLayoutModule } from '@angular/flex-layout';                        

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';    
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';  


import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';   
import { LeaderService } from './services/leader.service';             

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';   
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,                                                   
    MatToolbarModule,                                                          
    FlexLayoutModule,
    AppRoutingModule,                                                  
    MatListModule,
    MatGridListModule,
    MatCardModule,                                                   
    MatButtonModule,
    MatDialogModule                //typein                                                                                              
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService                                                                     
  ],

  entryComponents: [               //typein
    LoginComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }
