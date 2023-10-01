import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { LinkComponent } from '../shared/components/link/link.component';
import { TemoignageComponent } from '../shared/components/temoignage/temoignage.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { MiniCardComponent } from '../shared/components/mini-card/mini-card.component';
import { InstagramFeedComponent } from "../shared/components/instagram-feed/instagram-feed.component";


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule,
        RouterModule,
        LinkComponent,
        LayoutComponent,
        TemoignageComponent,
        MiniCardComponent,
        InstagramFeedComponent
    ]
})
export class HomeModule {
}
