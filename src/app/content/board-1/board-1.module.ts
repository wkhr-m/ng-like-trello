import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DirectiveModule } from './../../component/directive/directive.module';
import { Board1RoutingModule } from './board-1-routing.module';
import { BoardPageComponent } from './board-page/board-page.component';


@NgModule({
  imports: [
    CommonModule,
    Board1RoutingModule,
    DirectiveModule
  ],
  declarations: [BoardPageComponent]
})
export class Board1Module { }
