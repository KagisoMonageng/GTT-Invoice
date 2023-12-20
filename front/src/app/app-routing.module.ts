import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'add-new',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
