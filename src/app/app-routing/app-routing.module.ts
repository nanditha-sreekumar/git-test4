import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';  //typein
import { routes } from './routes';                       //typein

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)                        //typein
  ],
  exports: [                                            //typein
    RouterModule 
  ],

  declarations: []
})
export class AppRoutingModule { }
