import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
} from '@angular/material';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { GameReviewComponent } from './game-review/game-review.component';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatTableModule,
        FormModule,
        ReactiveFormsModule,
    ],
    declarations: [LayoutComponent, TopnavComponent, SidebarComponent, BlankPageComponent,
         GameReviewComponent, HomeComponent, AboutComponent]
})
export class LayoutModule {}
