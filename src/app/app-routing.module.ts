import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructComponent } from './construct/construct.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'about_us',
    component: InfoComponent
  },
  {
    path:'contact_us',
    component: ContactComponent
  },
  {
    path:'under_construction',
    component: ConstructComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
