import { Directive, Input, ElementRef } from '@angular/core';
import { AnimationsService } from '../services/animations.service';
import { animations } from '../model/animations-list';
import { timer } from 'rxjs';

@Directive({
  selector: '[animAted]',
  exportAs: 'animated'
})
export class AnimatedDirective {
  @Input() set animAted(options: { animation?; time? }) {
    this.time = options.time || this.time;
    this.animation = options.animation || this.animation;
  }
  time = 300;
  animation = 'fadeIn';

  constructor(
    private el: ElementRef,
    private animationsService: AnimationsService
  ) {}

  public animate(options?: { animation?; time? }) {
    let player;
    if (options !== undefined) {
      player = this.createPlayer(
        options.animation || this.animation,
        options.time || this.time
      );
    } else {
      player = this.createPlayer(this.animation, this.time);
    }
    player.play();
    player.onDone(async function() {
      await timer(500).toPromise();
      player.reset();
    });
  }

  private createPlayer(animation: string, time: number) {
    return this.animationsService.create(
      animations[animation](time),
      this.el.nativeElement
    );
  }
}
