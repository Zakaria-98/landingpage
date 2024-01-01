import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';

const routes: Routes = [ {
  path: 'root',
  component:AppComponent
},
{
  path: '',
  component:LandingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
