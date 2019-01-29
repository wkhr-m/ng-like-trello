import { DraggableModule } from './draggable/draggable.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

const DIRECTIVE = [
  DraggableModule
];

@NgModule({
  imports: [CommonModule, DIRECTIVE],
  declarations: [
  ],
  exports: [
    DIRECTIVE
  ],
  providers: [

  ]
})
export class DirectiveModule { }