import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  EmbeddedViewRef
} from '@angular/core';
import { AnimationsService } from '../animations.service';
import { getAnimations } from '../animations-list';
import { timer, from } from 'rxjs';

@Directive({
  selector: '[animIf]'
})
export class AnimIfDirective {
  @Input()
  animIfInfo: { startAnim: string; endAnim: string; time: number };
  animations;
  shownBefore = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private animationsService: AnimationsService
  ) {
    this.animations = getAnimations();
  }

  @Input()
  set animIf(show: boolean) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);
    if (show) {
      const player = this.animationsService.create(
        this.animations[this.animIfInfo.startAnim](this.animIfInfo.time),
        (this.viewContainer.get(0) as EmbeddedViewRef<any>).rootNodes[0]
      );
      player.play();
      this.shownBefore = true;
    } else if (this.shownBefore) {
      const player = this.animationsService.create(
        this.animations[this.animIfInfo.endAnim](this.animIfInfo.time),
        (this.viewContainer.get(0) as EmbeddedViewRef<any>).rootNodes[0]
      );
      player.play();
      timer(this.animIfInfo.time).subscribe(() => {
        this.viewContainer.clear();
      });
      this.shownBefore = false;
    }
  }
}
