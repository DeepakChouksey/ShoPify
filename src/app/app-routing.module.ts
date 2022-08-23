import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent }from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'productList',component:ProductComponent},
  {path: 'home',
  component:HomeComponent},
  {path: 'contact',
  component:ContactComponent},
  {path:'productDetails/:id',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
