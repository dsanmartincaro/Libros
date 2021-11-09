import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosListComponent } from './Views/libros-list/libros-list.component';
import { LibrosDetailComponent } from './Views/libros-detail/libros-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosListComponent,
    LibrosDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
