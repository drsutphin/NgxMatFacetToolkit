import {
  ConnectedOverlayPositionChange,
  FlexibleConnectedPositionStrategy,
  GlobalPositionStrategy,
  OverlayRef
} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {FacetModalConfig} from './facet-modal.config';
import {FacetEditorState} from '../models/facet-editor-state.model';
import {FacetResult, FacetResultType} from '../models/facet-result.model';


export class FacetModalRef<T = FacetEditorState> {
  private afterClosedSubject = new Subject<FacetResult<T>>();
  private beforeClosedSubject = new Subject<FacetResult<T>>();

  private _result: FacetResult<T> = {type: FacetResultType.CANCEL};

  constructor(private overlayRef: OverlayRef,
              private positionStrategy: FlexibleConnectedPositionStrategy | GlobalPositionStrategy,
              public config: FacetModalConfig) {
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close(this._result);
      });

      this.overlayRef.detachments().subscribe(() => {
        this.beforeClosedSubject.next(this._result);
        this.beforeClosedSubject.complete();
      });

      this.overlayRef.keydownEvents().pipe(
        filter(event => event.key === 'Escape')
      ).subscribe(() => {
        this.close();
      });
    }
  }

  close(dialogResult?: FacetResult<T>): void {
    if (!!dialogResult) {
      this._result = dialogResult;
    }

    this.beforeClosedSubject.next(this._result);
    this.beforeClosedSubject.complete();

    this.afterClosedSubject.next(this._result);
    this.afterClosedSubject.complete();

    this.overlayRef.dispose();
  }

  afterClosed(): Observable<FacetResult<T>> {
    return this.afterClosedSubject.asObservable();
  }

  beforeClosed(): Observable<FacetResult<T>> {
    return this.beforeClosedSubject.asObservable();
  }

  positionChanges(): Observable<ConnectedOverlayPositionChange> | null {
    if ('positionChanges' in this.positionStrategy) {
      return this.positionStrategy.positionChanges;
    }
    return null;
  }
}
