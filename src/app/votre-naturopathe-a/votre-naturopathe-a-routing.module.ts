import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotreNaturopatheAComponent } from './votre-naturopathe-a.component';

const routes: Routes = [{ path: '', component: VotreNaturopatheAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotreNaturopatheARoutingModule { }
