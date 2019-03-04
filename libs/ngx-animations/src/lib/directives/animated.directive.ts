import { Directive, Input, ElementRef } from '@angular/core';
import { AnimationsService } from '../services/animations.service';
import { timer } from 'rxjs';

@Directive({
  selector: '[animAted]',
  exportAs: 'animated'
})
export class AnimatedDirective {
  @Input() set animAted(options: { animation?; time? }) {
    if (options) {
      this.time = options.time || this.time;
      this.animation = options.animation || this.animation;
    }
  }
  time = 300;
  animation = 'fadeIn';

  constructor(
    private el: ElementRef,
    private _animationsService: AnimationsService
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
    player.onDone(async () => {
      const time =
        options !== undefined ? options.time || this.time : this.time;
      await timer(time).toPromise();
      player.reset();
    });
  }

  private createPlayer(animation: string, time: number) {
    return this._animationsService.create(
      this._animationsService.animations[animation](time),
      this.el.nativeElement
    );
  }
}
