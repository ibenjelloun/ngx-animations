[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f5608bd57e6841cb9f6da08b8a241a43)](https://app.codacy.com/app/ibenjelloun/ngx-animations?utm_source=github.com&utm_medium=referral&utm_content=ibenjelloun/ngx-animations&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/ibenjelloun/ngx-animations.svg?branch=master)](https://travis-ci.org/ibenjelloun/ngx-animations)
[![Known Vulnerabilities](https://snyk.io/test/github/ibenjelloun/ngx-animations/badge.svg?targetFile=libs/ngx-animations/package.json)](https://snyk.io/test/github/ibenjelloun/ngx-animations?targetFile=libs/ngx-animations/package.json)
[![Dependencies](https://david-dm.org/ibenjelloun/ngx-animations.svg)](https://david-dm.org/ibenjelloun/ngx-animations?view=list)

# NgxAnimations

This is an adaptation of the [Animate.css](https://daneden.github.io/animate.css/) animations using the @angular/animations library.

[You can find a Demo here.](https://stackblitz.com/edit/ngx*animations)

## Quick Start

First import the `BrowserAnimationsModule` and `NgxAnimationsModule` :

```typescript
import { BrowserAnimationsModule } from '@angular/platform*browser/animations';
import { NgxAnimationsModule } from 'ngx*animations';
...

@NgModule({
  imports:      [ BrowserAnimationsModule, NgxAnimationsModule ],
  ...
})
```

Use the `*animIf` directive to set the start and end animation :

```html
 <div *animIf="show; info: { startAnim: 'bounceIn', endAnim: 'bounceOut', time: 1000 }"></div>
```

## Control animations from typescript

Then in your component :

Import the desired animation and the AnimationsService :

```typescript
import { fadeIn, AnimationsService } from 'ngx*animations';
```

Get your element using the `@ViewChild` annotation :

```typescript
@ViewChild('element') element: ElementRef;
```

Inject the `AnimationsService` :

```typescript
constructor(private animationsService: AnimationsService) {}
```

After that you can create the player :

```typescript
const player = this.animationsService.create(
  fadeIn(300),
  this.element.nativeElement
);
```

And play the animation :

```typescript
player.play();
```

## List of animations

  - bounce
  - flash
  - pulse
  - rubberBand
  - shake
  - swing
  - tada
  - wobble
  - jello
  - bounceIn
  - bounceInDown
  - bounceInLeft
  - bounceInRight
  - bounceInUp
  - bounceOut
  - bounceOutDown
  - bounceOutLeft
  - bounceOutRight
  - bounceOutUp
  - fadeIn
  - fadeInDown
  - fadeInDownBig
  - fadeInLeft
  - fadeInLeftBig
  - fadeInRight
  - fadeInRightBig
  - fadeInUp
  - fadeInUpBig
  - fadeOut
  - fadeOutDown
  - fadeOutDownBig
  - fadeOutLeft
  - fadeOutLeftBig
  - fadeOutRight
  - fadeOutRightBig
  - fadeOutUp
  - fadeOutUpBig
  - flip
  - flipInX
  - flipInY
  - flipOutX
  - flipOutY
  - lightSpeedIn
  - lightSpeedOut
  - rotateIn
  - rotateInDownLeft
  - rotateInDownRight
  - rotateInUpLeft
  - rotateInUpRight
  - rotateOut
  - rotateOutDownLeft
  - rotateOutDownRight
  - rotateOutUpLeft
  - rotateOutUpRight
  - slideInUp
  - slideInDown
  - slideInLeft
  - slideInRight
  - slideOutUp
  - slideOutDown
  - slideOutLeft
  - slideOutRight
  - zoomIn
  - zoomInDown
  - zoomInLeft
  - zoomInRight
  - zoomInUp
  - zoomOut
  - zoomOutDown
  - zoomOutLeft
  - zoomOutRight
  - zoomOutUp
  - hinge
  - jackInTheBox
  - rollIn
  - rollOut
