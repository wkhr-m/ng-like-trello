import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Board2RoutingModule } from './board-2-routing.module';
import { BoardPageComponent } from './board-page/board-page.component';

@NgModule({
  imports: [
    CommonModule,
    Board2RoutingModule,
    DragDropModule
  ],
  declarations: [BoardPageComponent]
})
export class Board2Module { }
