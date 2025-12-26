import {ComponentType, Overlay} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Injectable, ElementRef, Injector} from '@angular/core';
import {DefaultFacetModalConfig, FacetModalConfig} from './facet-modal.config';
import {FacetModalRef} from './facet-modal.ref';
import {FacetModalComponent} from './facet-modal/facet-modal.component';
import {FACET_MODAL_DATA} from './facet-modal.data';

@Injectable({
  providedIn: 'root'
})
export class FacetModalService {

  constructor(private overlay: Overlay,
              private injector: Injector) {
  }

  open<T = unknown>(component: ComponentType<any>,
       target: ElementRef | HTMLElement,
       config: Partial<FacetModalConfig> = {}): FacetModalRef<T> {

    const facetModalConfig: FacetModalConfig = Object.assign({}, DefaultFacetModalConfig, config);

    const offsetY = facetModalConfig.offsetY || 0;
    const offsetX = facetModalConfig.offsetX || 0;

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(target)
      .withPush(false)
      .withFlexibleDimensions(true)
      .withPositions([
        {
          overlayX: 'start',
          overlayY: 'top',
          originX: 'start',
          originY: 'center',
          offsetX,
          offsetY,
        },
      ]);

    const overlayRef = this.overlay.create({
      hasBackdrop: facetModalConfig.hasBackdrop ?? true,
      backdropClass: facetModalConfig.backdropClass,
      panelClass: facetModalConfig.panelClass,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block()
    });

    if (facetModalConfig.width) {
      overlayRef.updateSize({width: facetModalConfig.width});
    }


    const modalRef = new FacetModalRef<T>(overlayRef, positionStrategy, facetModalConfig);

    const injector = Injector.create({
      providers: [
        {
          provide: FACET_MODAL_DATA,
          useValue: config.data
        },
        {
          provide: FacetModalRef,
          useValue: modalRef
        },
      ],
      parent: this.injector
    });

    const modal = overlayRef.attach(new ComponentPortal(FacetModalComponent, null, injector)).instance;
    modal.attachComponentPortal(new ComponentPortal<any>(component, null, injector));

    return modalRef;
  }
}
