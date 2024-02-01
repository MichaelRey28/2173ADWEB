import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path: 'about', component:AboutComponent}, {path:'join-us', component:JoinUsComponent}, {path:'our-partner', component:OurPartnerComponent},{ path: '', redirectTo: '/home', pathMatch: 'full' }, {path:'home', component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
