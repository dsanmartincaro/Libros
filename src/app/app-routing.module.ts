import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosDetailComponent } from './Views/libros-detail/libros-detail.component';
import { LibrosListComponent } from './Views/libros-list/libros-list.component';

const routes: Routes = [
  {
    path:'', component:LibrosListComponent
  },
  {
    path: 'detail/:id', component:LibrosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
