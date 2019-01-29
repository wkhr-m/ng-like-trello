import { Directive, EventEmitter, HostBinding, HostListener, Output, ElementRef, NgZone, ContentChild, Input, ChangeDetectorRef } from '@angular/core';

import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { DraggableService } from './draggable.service';
import { DraggableHelperDirective } from './draggable-helper.directive';

/**
 * Keeps track of the state of a drag operation.
 */
export interface DragOperation {
  startEvent: PointerEvent;
  lastEvent: PointerEvent;
  offset: { x: number, y: number };
  clientRect: ClientRect;
}

/**
 * Base directive which emits drag events.
 */
@Directive({
  selector: '[appDraggable],[appMovable],[appDroppable],[appSortable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('attr.touch-action') touchAction = 'none';

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  @Input('appDraggableWithHelper')
  @ContentChild(DraggableHelperDirective)
  helper: DraggableHelperDirective;

  @HostBinding('class.dragging') get dragging() {
    return !!this.dragOperation && this.moved;
  }

  handle$?: Observable<PointerEvent>;

  private subscriptions: Subscription[] = [];
  private dragOperation?: DragOperation;
  private moved = false;

  constructor(private element: ElementRef,
    private service: DraggableService,
    private cd: ChangeDetectorRef,
    private zone: NgZone) { }

  ngAfterContentInit(): void {
    this.zone.runOutsideAngular(() => {
      this.subscriptions.push(
        (this.handle$ || fromEvent<PointerEvent>(this.element.nativeElement, 'pointerdown'))
          .subscribe(event => this.onPointerDown(event)),
        fromEvent<PointerEvent>(document, 'pointermove')
          .subscribe(event => this.onPointerMove(event)),
        fromEvent<PointerEvent>(document, 'pointerup')
          .subscribe(event => this.onPointerUp(event)),
        fromEvent<PointerEvent>(document, 'pointercancel')
          .subscribe(event => this.onPointerUp(event))
      );
    });

    console.log(this.service.abortedDragOperation)
    // continue aborted drag operation if any present
    if (this.service.abortedDragOperation) {
      this.dragOperation = this.service.abortedDragOperation;
      this.service.abortedDragOperation = undefined;

      if (this.helper) {
        this.helper.onDragStart(this.dragOperation);
        this.helper.onDragMove(this.dragOperation);
      }
    }
  }

  private onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    const clientRect = this.element.nativeElement.getBoundingClientRect();

    this.dragOperation = {
      startEvent: event,
      lastEvent: event,
      offset: {
        x: event.clientX - clientRect.left,
        y: event.clientY - clientRect.top
      },
      clientRect: clientRect
    };

    this.zone.run(() => {
      this.dragStart.emit(event);

      if (this.helper) {
        this.helper.onDragStart(this.dragOperation);
      }
    });
  }

  private onPointerMove(event: PointerEvent): void {
    if (!this.dragOperation || this.dragOperation.startEvent.pointerId !== event.pointerId) {
      return;
    }

    this.dragOperation.lastEvent = event;
    this.moved = true;

    this.zone.run(() => {
      this.dragMove.emit(event);

      if (this.helper) {
        this.helper.onDragMove(this.dragOperation);
      }
    });
  }

  private onPointerUp(event: PointerEvent): void {
    if (!this.dragOperation || this.dragOperation.lastEvent.pointerId !== event.pointerId) {
      return;
    }

    this.dragOperation = undefined;
    this.moved = false;

    this.zone.run(() => {
      this.dragEnd.emit(event);

      if (this.helper) {
        this.helper.onDragEnd(this.element.nativeElement.getBoundingClientRect());
      }
    });
  }

  ngOnDestroy(): void {
    if (this.dragging) {
      this.service.abortedDragOperation = this.dragOperation;
    }

    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
