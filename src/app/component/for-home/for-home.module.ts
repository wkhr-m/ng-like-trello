import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

const MODULE = [
  SideMenuComponent,
  BoardComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: MODULE,
  exports: MODULE
})
export class ForHomeModule { }
