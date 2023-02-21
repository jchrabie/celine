import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {HeaderComponent} from './layout/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './layout/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutComponent} from './layout/layout.component';
import {LayoutService} from './services/layout.service';
import {AbstractLayoutComponent} from './layout/abstract-layout.component';
import {HttpClientModule} from "@angular/common/http";
import {TagService} from './services/tag.service';
import {DeroulementComponent} from "./components/deroulement/deroulement.component";
import {LinkComponent} from './components/link/link.component';
import {TemoignageComponent} from './components/temoignage/temoignage.component';

@NgModule({
  declarations: [
    AbstractLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    DeroulementComponent,
    LinkComponent,
    TemoignageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  providers: [LayoutService, TagService],
  exports: [
    AbstractLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    DeroulementComponent,
    LinkComponent,
    TemoignageComponent,
  ],
})
export class SharedModule {
}
