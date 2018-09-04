import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationsService } from 'ngx-animations';
import { getAnimations } from './animations';
import { timer } from 'rxjs';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('cube') cube: ElementRef;
  animations;
  animationsNames;
  animation = 'fadeIn';

  constructor(private animationsService: AnimationsService) {
    this.animations = getAnimations();
    this.animationsNames = Object.keys(this.animations);
  }

  animate() {
    const player = this.animationsService.create(this.animations[this.animation](300), this.cube.nativeElement);
    player.play();
    player.onDone(async function() {
      await timer(500).toPromise();
      player.reset();
    });
  }

}
