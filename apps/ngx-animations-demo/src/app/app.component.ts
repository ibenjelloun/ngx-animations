import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationsService, animations } from 'ngx-animations';
import { timer } from 'rxjs';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('cube') cube: ElementRef;
  animationsNames;
  animation = 'bounce';
  show = true;

  constructor(private animationsService: AnimationsService) {
    this.animationsNames = Object.keys(animations);
  }

  animate() {
    const player = this.animationsService.create(
      animations[this.animation](300),
      this.cube.nativeElement
    );
    player.play();
    player.onDone(async function() {
      await timer(500).toPromise();
      player.reset();
    });
  }
}
