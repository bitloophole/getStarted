import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    InprogressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [HeaderComponent, PageNotFoundComponent, InprogressComponent]
})
export class SharedModule { }
