import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForHomeModule } from './../component/for-home/for-home.module';
import { ContentRoutingModule } from './content-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    ForHomeModule,
  ],
  declarations: [HomePageComponent]
})
export class ContentModule { }
