import { Injectable, ElementRef } from '@angular/core';
import {
  AnimationStyleMetadata,
  AnimationAnimateMetadata,
  AnimationPlayer,
  AnimationBuilder
} from '@angular/animations';
import { animations, stylesToAnimation } from '../model/animations-list';
import { AnimationDefinition } from '../model/animation-definition';

@Injectable()
export class AnimationsService {
  public animations = animations;
  constructor(private _builder: AnimationBuilder) {}
  create(animation: (AnimationStyleMetadata | AnimationAnimateMetadata)[], element: ElementRef): AnimationPlayer {
    return this._builder.build(animation).create(element);
  }
  addAnimations(customAnimations: { name: string; animation: AnimationDefinition }[]) {
    customAnimations.forEach(animation => this.add(animation.name, animation.animation));
  }
  private add(name: string, animation: AnimationDefinition) {
    if (this.animations[name] !== undefined) {
      throw new Error('There is already an animation named ' + name);
    }
    this.animations[name] = stylesToAnimation(animation);
  }
}
