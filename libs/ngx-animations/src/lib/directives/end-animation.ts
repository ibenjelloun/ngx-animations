import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { AnimationsService } from '../animations.service';
import { getAnimations } from '../animations-list';
import { timer } from 'rxjs';

@Directive({
  selector: '[animEnd]'
})
export class EndAnimationDirective implements OnDestroy {
  @Input() animEnd: string;
  @Input() time = 500;
  animations;
  constructor(private el: ElementRef, private animationsService: AnimationsService) {
    this.animations = getAnimations();
  }

  async ngOnDestroy() {
    const player = this.animationsService.create(this.animations[this.animEnd](this.time), this.el.nativeElement);
    player.play();
    await timer(this.time).toPromise();
  }
}
