import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Button1Component } from './button1/button1.component';
import { Button2Component } from './button2/button2.component';



const routes: Routes = [
  { path: 'button', component: Button1Component },
  
  { path: 'Button2', component: Button2Component }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Button1Component, Button2Component]
