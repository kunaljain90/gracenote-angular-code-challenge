import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedalsTableComponent } from './medals-table/medals-table.component';

const routes: Routes = [
  { path: '', component: MedalsTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
