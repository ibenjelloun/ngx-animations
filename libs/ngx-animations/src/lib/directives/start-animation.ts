import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { AnimationsService } from '../animations.service';
import { getAnimations } from '../animations-list';

@Directive({
  selector: '[animStart]'
})
export class StartAnimationDirective implements OnInit {
  @Input() animStart: string;
  @Input() time = 500;
  animations;
  constructor(private el: ElementRef, private animationsService: AnimationsService) {
    this.animations = getAnimations();
  }

  ngOnInit() {
    const player = this.animationsService.create(this.animations[this.animStart](this.time), this.el.nativeElement);
    player.play();
  }
}
