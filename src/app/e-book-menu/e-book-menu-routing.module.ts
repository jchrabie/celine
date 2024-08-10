import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBookMenuComponent } from './e-book-menu.component';

const routes: Routes = [{ path: '', component: EBookMenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EBookMenuRoutingModule { }
