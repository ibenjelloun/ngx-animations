import { AnimationStyleMetadata, AnimationAnimateMetadata, style, animate } from "@angular/animations";

export function lightSpeedIn(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '0', transform: 'translate3d(100%, 0, 0) skewX(-30deg)' }),
    animate(t, style({opacity: '1', transform: 'skewX(20deg)', offset: .6 })),
    animate(t, style({ transform: 'skewX(-5deg)', offset: .8 })),
    animate(t, style({ transform: 'translate3d(0, 0, 0)' }))
  ];
}

export function lightSpeedOut(time: number): (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  const t = time / 4;
  return [
    style({ opacity: '1' }),
    animate(t, style({ opacity: '0', transform: 'translate3d(100%, 0, 0) skewX(30deg)' }))
  ];
}
