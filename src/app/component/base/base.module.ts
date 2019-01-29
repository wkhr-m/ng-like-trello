import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvelopeComponent } from './envelope/envelope.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EnvelopeComponent]
})
export class BaseModule { }
