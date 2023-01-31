import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutComponent } from './layout/layout.component';
import { LayoutService } from './services/layout.service';
import { AbstractLayoutComponent } from './layout/abstract-layout.component';
import { TagService } from './services/tag.service';

@NgModule({
  declarations: [
    AbstractLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
  ],
  providers: [LayoutService, TagService],
  exports: [
    AbstractLayoutComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
  ],
})
export class SharedModule {}
