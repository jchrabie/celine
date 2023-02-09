import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashimotoComponent } from './hashimoto.component';

const routes: Routes = [{ path: '', component: HashimotoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashimotoRoutingModule { }
