import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsService } from './services/animations.service';
import { AnimIfDirective } from './directives/if-animation';
import { AnimatedDirective } from './directives/animated.directive';

@NgModule({
  declarations: [AnimIfDirective, AnimatedDirective],
  imports: [CommonModule],
  providers: [AnimationsService],
  exports: [AnimIfDirective, AnimatedDirective]
})
export class NgxAnimationsModule {}
