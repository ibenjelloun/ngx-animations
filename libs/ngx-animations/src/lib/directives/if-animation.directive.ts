import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef
} from '@angular/core';
import { AnimationsService } from '../services/animations.service';
import { timer } from 'rxjs';

@Directive({
  selector: '[animIf]'
})
export class AnimIfDirective {
  @Input()
  animIfInfo: { startAnim: string; endAnim: string; time: number };
  shownBefore = false;
  subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private _animationsService: AnimationsService
  ) {}

  @Input()
  set animIf(show: boolean) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (show) {
      const player = this.createPlayer(
        this.animIfInfo.startAnim,
        this.animIfInfo.time
      );
      player.play();
      this.shownBefore = true;
    }
    if (!show && this.shownBefore) {
      const player = this.createPlayer(
        this.animIfInfo.endAnim,
        this.animIfInfo.time
      );
      player.play();
      this.clearAfterTime(this.viewContainer, this.animIfInfo.time);
      this.shownBefore = false;
    }
  }

  private createPlayer(animation: string, time: number) {
    return this._animationsService.create(
      this._animationsService.animations[animation](time),
      (this.viewContainer.get(0) as EmbeddedViewRef<any>).rootNodes[0]
    );
  }

  private clearAfterTime(viewContainer: ViewContainerRef, time: number) {
    this.subscription = timer(time).subscribe(() => {
      viewContainer.clear();
    });
  }
}
