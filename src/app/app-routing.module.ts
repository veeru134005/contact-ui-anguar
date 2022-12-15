import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContact } from './createcontact/contactcreate.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';

const routes: Routes = [
  
  {path:'contacts',component:ViewcontactsComponent},
  {path:'create-contact',component:CreateContact},
  {path:'',redirectTo:'contacts',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
