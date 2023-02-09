import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HypothyroidieComponent } from './hypothyroidie.component';

const routes: Routes = [{ path: '', component: HypothyroidieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HypothyroidieRoutingModule { }
