[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f5608bd57e6841cb9f6da08b8a241a43)](https://app.codacy.com/app/ibenjelloun/ngx-animations?utm_source=github.com&utm_medium=referral&utm_content=ibenjelloun/ngx-animations&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/ibenjelloun/ngx-animations.svg?branch=master)](https://travis-ci.org/ibenjelloun/ngx-animations)
[![codecov](https://codecov.io/gh/ibenjelloun/ngx-animations/branch/master/graph/badge.svg)](https://codecov.io/gh/ibenjelloun/ngx-animations/branch/master)
[![Known Vulnerabilities](https://snyk.io/test/github/ibenjelloun/ngx-animations/badge.svg?targetFile=libs/ngx-animations/package.json)](https://snyk.io/test/github/ibenjelloun/ngx-animations?targetFile=libs/ngx-animations/package.json)
[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ibenjelloun/ngx-animations/blob/master/LICENSE)

# NgxAnimations

This is an adaptation of the [Animate.css](https://daneden.github.io/animate.css/) animations using the @angular/animations library.

*   [You can find a demo here.](https://stackblitz.com/edit/ngx-animations)
*   Angular 11.x use ngx-animations 5.x
*   Angular 9.x use ngx-animations 4.x
*   Angular 8.x use ngx-animations 3.x
*   Angular 7.x use ngx-animations 2.x

## Installing and importing NgxAnimations

1   Install `ngx-animations` :

```bash
npm install ngx-animations
```

Or

```bash
yarn add ngx-animations
```

2   Import the `BrowserAnimationsModule` and `NgxAnimationsModule` in your module :

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAnimationsModule } from 'ngx-animations';
...

@NgModule({
  imports:      [ BrowserAnimationsModule, NgxAnimationsModule ],
  ...
})
```

## Using the `AnimatedDirective` to create animations on events with a minimum of code

```html
<div (click)="myDiv.animate()">
  <div #myDiv="animated" [animAted]="{time: 800, animation: 'flip'}"></div>
</div>
```

[Running example on stackblitz using `@ngx-starter-kit/ngx-utils` InViewportDirective](https://stackblitz.com/edit/ngx-animations-animated-directive-inviewport)

## Using the `AnimIfDirective` to animate an element on init and before destroy

Use the `*animIf` directive to set the start and end animation :

```html
<div
  *animIf="show; info: { startAnim: 'bounceIn', endAnim: 'bounceOut', time: 1000 }"
></div>
```

## Add custom animations to the existing animations

Create an `AnimationDefinition` instance for every animation you want to add :

```typescript
const animationDefinition = new AnimationDefinition({}, [
  { background: 'blue', width: '25%', offset: 0.25 },
  { background: 'green', width: '100%', offset: 0.5 },
  { background: 'yellow', width: '50%', offset: 0.75 },
  { background: 'black', width: '200px', offset: 1 }
]);
```

Inject the `AnimationsService` in your `AppModule` and use the `addAnimations` method to add your array of `AnimationDefinition`s:

```typescript
constructor(private animationsService: AnimationsService) {
  this._animationsService.addAnimations([{ name: 'aCustomAnimation', animation: animationDefinition }]);
}
```

That's it, you are now ready to use your custom animation like other native animations.

[You can find a running example for custom animations on stackblitz](https://stackblitz.com/edit/ngx-animations-custom-animation)

## Use the AnimationsService to create and use animations (you can use `AnimatedDirective` instead)

Then in your component :

Import the desired animation and the AnimationsService :

```typescript
import { fadeIn, AnimationsService } from 'ngx-animations';
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

## Add routing transition animations

[stackblitz example](https://stackblitz.com/edit/ngx-animations-routing)

First add `animation` to routing `data` :

```typescript
{
    path: "animals",
    component: AnimalsComponent,
    data: { animation: "AnimalsPage" }
  },
  {
    path: "fruits",
    component: FruitsComponent,
    data: { animation: "FruitsPage" }
  }
```

Then you can either use a generic value `* => *` for all the transitions :

```typescript
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("routeAnimation", [
      buildRouteTransition({
        stateChangeExpr: "* => *",
        enter: animations.fadeIn(1000),
        leave: animations.fadeOut(1000)
      })
    ])
  ]
})
export class AppComponent {}
```

Or add a specific animation for each transition :

```typescript
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("routeAnimation", [
      buildRouteTransition({
        stateChangeExpr: "AnimalsPage => FruitsPage",
        enter: animations.zoomInRight(500),
        leave: animations.zoomOutLeft(200)
      }),
      buildRouteTransition({
        stateChangeExpr: "FruitsPage => AnimalsPage",
        enter: animations.zoomInLeft(500),
        leave: animations.zoomOutRight(200)
      })
    ])
  ]
})
export class AppComponent {}
```

Finally link the animation definition to the template :

```
<main [@routeAnimation]="o.activatedRouteData.animation">
	<router-outlet #o="outlet"></router-outlet>
</main>
```

## List of animations

bounce
flash
pulse
rubberBand
shake
swing
tada
wobble
jello
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeIn
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInUp
fadeInUpBig
fadeOut
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutUp
fadeOutUpBig
flip
flipInX
flipInY
flipOutX
flipOutY
lightSpeedIn
lightSpeedOut
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
slideInUp
slideInDown
slideInLeft
slideInRight
slideOutUp
slideOutDown
slideOutLeft
slideOutRight
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp
hinge
jackInTheBox
rollIn
rollOut
