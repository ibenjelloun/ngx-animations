import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsService } from './animations.service';
import { StartAnimationDirective } from './directives/start-animation';
import { EndAnimationDirective } from './directives/end-animation';
@NgModule({
  declarations: [StartAnimationDirective, EndAnimationDirective],
  imports: [CommonModule],
  providers: [AnimationsService],
  exports: [StartAnimationDirective, EndAnimationDirective]
})
export class NgxAnimationsModule {}
