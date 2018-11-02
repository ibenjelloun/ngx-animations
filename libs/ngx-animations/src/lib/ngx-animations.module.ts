import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsService } from './animations.service';
import { AnimIfDirective } from './directives/if-animation';

@NgModule({
  declarations: [AnimIfDirective],
  imports: [CommonModule],
  providers: [AnimationsService],
  exports: [AnimIfDirective]
})
export class NgxAnimationsModule {}
