[![Build Status](https://travis-ci.org/ibenjelloun/ngx-animations.svg?branch=master)](https://travis-ci.org/ibenjelloun/ngx-animations)
[![Known Vulnerabilities](https://snyk.io/test/github/ibenjelloun/ngx-animations/badge.svg?targetFile=libs/ngx-animations/package.json)](https://snyk.io/test/github/ibenjelloun/ngx-animations?targetFile=libs/ngx-animations/package.json)
[![Dependencies](https://david-dm.org/ibenjelloun/ngx-animations.svg)](https://david-dm.org/ibenjelloun/ngx-animations?view=list)

# NgxAnimations

This is an adaptation of the [Animate.css](https://daneden.github.io/animate.css/) animations using the @angular/animations library.

[You can find a Demo here.](https://stackblitz.com/edit/ngx-animations)

## Quick Start

First import the `BrowserAnimationsModule` and `NgxAnimationsModule` :

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAnimationsModule } from 'ngx-animations';
...

@NgModule({
  imports:      [ BrowserAnimationsModule, NgxAnimationsModule ],
  ...
})
```

Then in your component :

- Import the desired animation and the AnimationsService :

```
import { fadeIn, AnimationsService } from 'ngx-animations';
```

- Get your element using the `@ViewChild` annotation :

```
@ViewChild('element') element: ElementRef;
```

Inject the `AnimationsService` :

```
constructor(private animationsService: AnimationsService) {}
```

After that you can create the player :

```
const player = this.animationsService.create(fadeIn(300), this.element.nativeElement);
```

And play the animation :

```
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
