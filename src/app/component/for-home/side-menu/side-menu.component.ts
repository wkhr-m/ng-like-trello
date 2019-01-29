import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  active: boolean = true;
  subscription: Subscription;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.subscription = fromEvent(window, 'resize').subscribe(() => {
        if (this.active !== window.innerWidth > 710) {
          this.zone.run(() => this.active = window.innerWidth > 710);
        }
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
