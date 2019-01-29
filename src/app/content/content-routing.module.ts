import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'not-cdk-dnd', loadChildren: './../content/board-1/board-1.module#Board1Module' },
  { path: 'yes-cdk-dnd', loadChildren: './../content/board-2/board-2.module#Board2Module' },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ContentRoutingModule { }
