import { Injectable, ElementRef } from '@angular/core';
import { AnimationStyleMetadata, AnimationAnimateMetadata, AnimationPlayer, AnimationBuilder } from '@angular/animations';

@Injectable()
export class AnimationsService {
  constructor(private _builder: AnimationBuilder) {}
  create(animation: (AnimationStyleMetadata | AnimationAnimateMetadata)[], element: ElementRef): AnimationPlayer {
    return this._builder.build(animation).create(element);
  }
}
