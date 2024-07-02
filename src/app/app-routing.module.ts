import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search/:searchTerm',
    component:HomeComponent
  },
  {
    path:'search/se/id',
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
